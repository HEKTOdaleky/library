import axios from "../../axios-api";
import { NotificationManager } from "react-notifications";

import {
  GET_BOOKS_FROM_SEARCH_FAILURE,
  GET_BOOKS_FROM_SEARCH_SUCCESS
} from "./actionTypes";

const getBooksFromSearchSuccess = booksData => {
  return { type: GET_BOOKS_FROM_SEARCH_SUCCESS, booksData };
};

const getBooksFromSearchFailure = error => {
  return { type: GET_BOOKS_FROM_SEARCH_FAILURE, error };
};

export const getBooksFromSearch = searchData => {
  return dispatch => {
    return axios.post("/books/search", searchData).then(response => {
      dispatch(getBooksFromSearchSuccess(response.data));
    }, error => {
      dispatch(getBooksFromSearchFailure(error.response.data));
      if (error.response.data.error) {
         NotificationManager.error(error.response.data.error);
      } else {
        NotificationManager.info(error.response.data.message);
      }
    });
  };
};
