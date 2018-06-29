import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";

import {
    GET_BOOKS_FROM_FULLSEARCH_FAILURE,
    GET_BOOKS_FROM_FULLSEARCH_SUCCESS,
    GET_BOOKS_FROM_SEARCH_FAILURE,
    GET_BOOKS_FROM_SEARCH_SUCCESS
} from "./actionTypes";
import {push} from "react-router-redux";

const getBooksFromSearchSuccess = booksData => {
    return {type: GET_BOOKS_FROM_SEARCH_SUCCESS, booksData};
};

const getBooksFromSearchFailure = error => {
    return {type: GET_BOOKS_FROM_SEARCH_FAILURE, error};
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
            if (error.response.data.error) {
                NotificationManager.error(error.response.data.error);
            } else {
                NotificationManager.info(error.response.data.message);
            }
        }
    )
};

export const postBooksData = (data) => {
    return dispatch => {
         axios.post("books/", data).then(response => {
            dispatch(push("/admin"));
            NotificationManager.success("Успешно!");
        },err=>{
             console.log(err)
         })
    }
};