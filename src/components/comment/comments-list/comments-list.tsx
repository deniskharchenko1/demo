import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, match as matchThis } from "react-router";

import "./comments-list.css";
import { getComments } from "../../../redux/comments/actions";
import { CommentsItem } from "../comments-item";
import { RootStateType } from "../../../redux/type";
import Spinner from "../../spinner/spinner";
import { Alert } from "../../alert/alert";

type PropsType = RouteComponentProps & {
  match: matchThis<{ postId: string }>;
};

const CommentsList: FC<PropsType> = ({ match }) => {
  const {
    fetchedComments: comments,
    isLoading,
    error,
  } = useSelector((state: RootStateType) => state.comments);

  const dispatch = useDispatch();
  const postId = parseInt(match.params.postId);
  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="col-md-6">
        <div className="comments-list comments-group">
          {comments.map((comment) => (
            <CommentsItem key={comment.id} commentsData={comment} />
          ))}
        </div>
      </div>
      {error && <Alert />}
    </>
  );
};

export { CommentsList };
