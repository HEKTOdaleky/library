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
} from "../actions/actionTypes";

const initialState = {
  books: [],
  book: [],
  bookError: null,
  booksError: null,
  postError: null,
  updateError: null,
  findingBook: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_FROM_SEARCH_SUCCESS:
      return { ...state, books: action.booksData, booksError: null };
    case GET_BOOKS_FROM_SEARCH_FAILURE:
      return { ...state, booksError: action.error };
    case GET_BOOKS_FROM_FULLSEARCH_SUCCESS:
      return { ...state, books: action.bookData, booksError: null };
    case GET_BOOKS_FROM_FULLSEARCH_FAILURE:
      return { ...state, booksError: action.error };
    case GET_BOOK_BY_ID_SUCCESS:
      return { ...state, book: action.bookData, bookError: null };
    case GET_BOOK_BY_ID_FAILURE:
      return { ...state, bookError: action.error };
    case BOOK_POST_DATA_SUCCESS:
      return { ...state, postError: null };
    case BOOK_POST_DATA_FAILURE:
      return { ...state, postError: action.postError };
    case BOOK_UPDATE_DATA_SUCCESS:
      return { ...state, updateError: null };
    case BOOK_UPDATE_DATA_FAILURE:
      return { ...state, updateError: action.updateError };
    case GET_BOOK_BY_BARCODE_SUCCESS:
      return { ...state, findingBook: action.data, error: null };
    case GET_BOOK_BY_BARCODE_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
