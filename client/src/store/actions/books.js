import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {
  BOOK_POST_DATA_FAILURE,
  BOOK_POST_DATA_SUCCESS,
  BOOK_UPDATE_DATA_FAILURE,
  BOOK_UPDATE_DATA_SUCCESS,
  GET_BOOK_BY_BARCODE_FAILURE,
  GET_BOOK_BY_BARCODE_SUCCESS,
  GET_BOOK_BY_ID_FAILURE,
  GET_BOOK_BY_ID_SUCCESS,
  GET_BOOKS_FROM_FULLSEARCH_FAILURE,
  GET_BOOKS_FROM_FULLSEARCH_SUCCESS,
  GET_BOOKS_FROM_SEARCH_FAILURE,
  GET_BOOKS_FROM_SEARCH_SUCCESS
} from "./actionTypes";

const getBooksFromSearchSuccess = booksData => {
    return {type: GET_BOOKS_FROM_SEARCH_SUCCESS, booksData};
};

const getBooksFromSearchFailure = error => {
    return {type: GET_BOOKS_FROM_SEARCH_FAILURE, error};
};

const bookPostDataSuccess = book => {
    return {type: BOOK_POST_DATA_SUCCESS, book}
};

const bookPostDataError = postError => {
    return {type: BOOK_POST_DATA_FAILURE, postError}
};

export const getBooksFromSearch = searchData => {
    return dispatch => {
        return axios.post("/books/search", searchData).then(response => {
            dispatch(getBooksFromSearchSuccess(response.data));
        }, error => {
            dispatch(getBooksFromSearchFailure(error.response.data));
            if (error.response.data.error) NotificationManager.error(error.response.data.error);
            if (error.response.data.message) NotificationManager.info(error.response.data.message);
        });
    };
};

const getBooksFromFullSearchSuccess = bookData => {
    return {type: GET_BOOKS_FROM_FULLSEARCH_SUCCESS, bookData};
};

const getBooksFromFullSearchFailure = error => {
    return {type: GET_BOOKS_FROM_FULLSEARCH_FAILURE, error};
};

export const getBooksFromFullSearch = searchData => dispatch => {
    return axios.post("books/full-search", searchData).then(
        response => {
            dispatch(getBooksFromFullSearchSuccess(response.data));
        },
        error => {
            dispatch(getBooksFromFullSearchFailure(error.response.data));
            if (error.response.data.error) NotificationManager.error(error.response.data.error);
            if (error.response.data.message) NotificationManager.info('Ошибка сервера');

        }
    )
};

export const postBooksData = (data) => {
    return dispatch => {
        axios.post("/books", data).then(response => {
            dispatch(bookPostDataSuccess(response.data));
            dispatch(push("/admin"));
            NotificationManager.success(response.data.message);
        }, error => {
          NotificationManager.error(error.response.data.message);
          dispatch(bookPostDataError(error.response.data));
        })
    }
};

const bookUpdateDataSuccess = book => {
  return {type: BOOK_UPDATE_DATA_SUCCESS, book}
};

const bookUpdateDataError = updateError => {
  return {type: BOOK_UPDATE_DATA_FAILURE, updateError}
};

export const updateBookData = data => {
  return dispatch => {
    axios.put(`/books/${data._id}`, data).then(response => {
      dispatch(bookUpdateDataSuccess(response.data));
      dispatch(push("/admin"));
      NotificationManager.success(response.data.message);
    },
    error => {
      dispatch(bookUpdateDataError(error.response.data));
      NotificationManager.error(error.response.data.message);
    })
  }
};

const getBookByIdSuccess = bookData => {
  return {type: GET_BOOK_BY_ID_SUCCESS, bookData}
};

const getBookByIdFailure = error => {
  return {type: GET_BOOK_BY_ID_FAILURE, error}
};

export const getBookById = id => {
  return dispatch => {
    axios.get(`/books/${id}`).then(response => {
      dispatch(getBookByIdSuccess(response.data))
    },
    error => {
      dispatch(getBookByIdFailure(error.response.data))
    })
  }
};


const getBookByBarcodeSuccess = data => {
  return {type: GET_BOOK_BY_BARCODE_SUCCESS, data};
};

const getBookByBarcodeFailure = error => {
  return {type: GET_BOOK_BY_BARCODE_FAILURE, error};
};

export const getBookByBarcode = barcode => {
  return dispatch => {
    axios.get(`/books/barcode/${barcode}`).then(
      response => {
        dispatch(getBookByBarcodeSuccess(response.data))
      },
      error => {
        dispatch(getBookByBarcodeFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};