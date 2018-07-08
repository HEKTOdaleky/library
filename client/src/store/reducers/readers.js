import {
  ADD_NEW_READER_FAILURE,
  ADD_NEW_READER_SUCCESS,
  GET_READERS_FOR_REMOVE_FAILURE, GET_READERS_FOR_REMOVE_SUCCESS, SEND_READERS_FAILURE
  ADD_NEW_READER_FAILURE, ADD_NEW_READER_SUCCESS, EDIT_READER_FAILURE,
  EDIT_READER_SUCCESS, GET_READER_BY_PIN_FAILURE, GET_READER_BY_PIN_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  error: null,
  newReader: null,
  readers: []
  newReader: null,
  findingReader: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_READER_SUCCESS:
      return {...state, newReader: action.data, error: null};
    case ADD_NEW_READER_FAILURE:
      return {...state, error: action.error};
    case EDIT_READER_SUCCESS:
      return {...state, newReader: action.data, error: null};
    case EDIT_READER_FAILURE:
      return {...state, error: action.error};
    case GET_READER_BY_PIN_SUCCESS:
      return {...state, findingReader: action.data, error: null};
    case GET_READER_BY_PIN_FAILURE:
      return {...state, findingReader: null, error: action.error};
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