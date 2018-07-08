import {
  ADD_NEW_READER_FAILURE,
  ADD_NEW_READER_SUCCESS,
  GET_READERS_FOR_REMOVE_FAILURE, GET_READERS_FOR_REMOVE_SUCCESS, SEND_READERS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  error: null,
  newReader: null,
  readers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_READER_SUCCESS:
      return {...state, newReader: action.data, error: null};
    case ADD_NEW_READER_FAILURE:
      return {...state, error: action.error};
    case GET_READERS_FOR_REMOVE_SUCCESS:
      return {...state, readers: action.data};
    case GET_READERS_FOR_REMOVE_FAILURE:
      return {...state, error: action.error};
    case SEND_READERS_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default reducer;