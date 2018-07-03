import {ADD_NEW_READER_FAILURE, ADD_NEW_READER_SUCCESS} from "../actions/actionTypes";

const initialState = {
  error: null,
  newReader: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_READER_SUCCESS:
      return {...state, newReader: action.data, error: null};
    case ADD_NEW_READER_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default reducer;