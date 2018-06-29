import {
    BOOK_POST_DATA_FAILURE,
    BOOK_POST_DATA_SUCCESS,
    GET_BOOKS_FROM_FULLSEARCH_FAILURE,
    GET_BOOKS_FROM_FULLSEARCH_SUCCESS,
    GET_BOOKS_FROM_SEARCH_FAILURE,
    GET_BOOKS_FROM_SEARCH_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    books: [],
    booksError: null,
    postError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS_FROM_SEARCH_SUCCESS:
            return {...state, books: action.booksData, booksError: null};
        case GET_BOOKS_FROM_SEARCH_FAILURE:
            return {...state, booksError: action.error};
        case GET_BOOKS_FROM_FULLSEARCH_SUCCESS:
            return {...state, books: action.bookData, booksError: null};
        case GET_BOOKS_FROM_FULLSEARCH_FAILURE:
            return {...state, booksError: action.error};
        case BOOK_POST_DATA_SUCCESS:
            return {...state, postError: null};
        case BOOK_POST_DATA_FAILURE:
            return {...state, postError: action.postError};
        default:
            return state;
    }
};

export default reducer;