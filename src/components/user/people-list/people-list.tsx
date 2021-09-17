import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../spinner";
import { Alert } from "../../alert/alert";
import "./people-list.css";
import { PeopleItem } from "../people-item";
import { getUsers } from "../../../redux/users/actions";
import { RootStateType } from "../../../redux/type";

const PeopleList: FC = () => {
  const {
    fetchedUsers: users,
    isLoading,
    error,
  } = useSelector((state: RootStateType) => {
    return state.users;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [value, setValue] = useState("");

  const searchedUsers = users.filter((user) => {
    return user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="d-flex col-md-12">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Search user"
              className="form-control"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <ul className="item-list list-group">
          {searchedUsers.map((user) => (
            <PeopleItem key={user.id} peopleData={user} />
          ))}
        </ul>
      </div>
      {error && <Alert />}
    </>
  );
};

export { PeopleList };
