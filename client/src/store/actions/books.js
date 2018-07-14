import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {
    BOOK_POST_DATA_FAILURE,
    BOOK_POST_DATA_SUCCESS,
    BOOK_UPDATE_DATA_FAILURE,
    BOOK_UPDATE_DATA_SUCCESS,
    CLEAR_FINDING_BOOK,
    GET_BOOK_BY_BARCODE_BOOK_FAILURE,
    GET_BOOK_BY_BARCODE_BOOK_SUCCESS,
    GET_BOOK_BY_BARCODE_FAILURE,
    GET_BOOK_BY_BARCODE_SUCCESS,
    GET_BOOKS_FROM_FULLSEARCH_FAILURE,
    GET_BOOKS_FROM_FULLSEARCH_SUCCESS,
    GET_BOOKS_FROM_SEARCH_FAILURE,
    GET_BOOKS_FROM_SEARCH_SUCCESS
} from "./actionTypes";

const getBooksFromSearchSuccess = booksData => {
    return {type: GET_BOOKS_FROM_SEARCH_SUCCESS, booksData};
};

export const getBooksFromSearchNull = () => {
    return {type: GET_BOOKS_FROM_SEARCH_SUCCESS, booksData: []};
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
    console.log(data);
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

const getBookByBarcodeSuccess = data => {
    return {type: GET_BOOK_BY_BARCODE_SUCCESS, data};
};
export const getBookByBarcodeCancel = () => {
    return {type: GET_BOOK_BY_BARCODE_SUCCESS, data: null};
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

const getBookByBarcodeBookSuccess = data => {
    return {type: GET_BOOK_BY_BARCODE_BOOK_SUCCESS, data};
};

const getBookByBarcodeBookFailure = error => {
    return {type: GET_BOOK_BY_BARCODE_BOOK_FAILURE, error};
};

export const getBookByBarcodeBook = barcode => {
    return dispatch => {
        axios.get(`/books/barcode-book/${barcode}`).then(
            response => {
                dispatch(getBookByBarcodeBookSuccess(response.data));
            },
            error => {
                dispatch(getBookByBarcodeBookFailure(error.response.data));
                if (error.response.data.error)
                    NotificationManager.error(error.response.data.error);
                if (error.response.data.message)
                    NotificationManager.info(error.response.data.message);
            }
        )
    }
};

export const clearFindingBook = () => {
    return {type: CLEAR_FINDING_BOOK};
};

export const getBookForDelete = () => {
    return dispatch => {
        axios.get("/books/for-delete").then(response => {
            dispatch(getBooksFromSearchSuccess(response.data.books));
            // NotificationManager.success(response.data.message);
        }, error => {
            NotificationManager.error(error.response.data.message);
            dispatch(bookPostDataError(error.response.data));
        })
    }
};

export const removeBookForDelete = (data) => {
    return dispatch => {
        axios.post("/books/for-delete", data).then(response => {
            NotificationManager.success(response.data.message);
            dispatch(push("/admin"));
        }, error => {
            NotificationManager.error(error.response.data.message);
            dispatch(bookPostDataError(error.response.data));
        })
    }
};

export const markBookForDelete = (data) => {
    return dispatch => {
        console.log(data);

        axios.post("/books/for-delete-mark", data).then(response => {
            NotificationManager.success(response.data.message);
            dispatch(push("/librarian"));
        }, error => {
            NotificationManager.error(error.response.data.message);
            dispatch(bookPostDataError(error.response.data));
        })
    }
};