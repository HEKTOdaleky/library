import {GET_BOOKS_FROM_SEARCH_FAILURE, GET_BOOKS_FROM_SEARCH_SUCCESS} from "../actions/actionTypes";

const initialState = {
  books: [],
  booksError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_FROM_SEARCH_SUCCESS:
      return {...state, books: action.booksData};
    case GET_BOOKS_FROM_SEARCH_FAILURE:
      return {...state, booksError: action.error};
    default:
      return state;
  }
};

export default reducer;