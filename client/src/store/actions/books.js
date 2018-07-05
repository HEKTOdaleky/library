import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {
    BOOK_POST_DATA_FAILURE,
    BOOK_POST_DATA_SUCCESS,
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
        axios.post("books/", data).then(response => {
            dispatch(bookPostDataSuccess(response.data));
            dispatch(push("/admin"));
            console.log(response.data);
            NotificationManager.success(response.data.message);
        }, err => {
          NotificationManager.error(err.response.data.message);
          dispatch(bookPostDataError(err.response.data));
        })
    }
};