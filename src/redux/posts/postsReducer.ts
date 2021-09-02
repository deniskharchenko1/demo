import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
} from "./types";
import { InitialStateType } from "./type";

const initialState = {
  isLoading: false,
  error: "",
  fetchedAllPosts: [],
};

export const postsReducer = (
  state = initialState,
  action
): InitialStateType => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, isLoading: true };
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, isLoading: false, fetchedAllPosts: action.payload };
    case GET_ALL_POSTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case GET_POSTS:
      return { ...state, isLoading: true };
    case GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, fetchedAllPosts: action.payload };
    case GET_POSTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
  }
};