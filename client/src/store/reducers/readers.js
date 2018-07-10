import {
  ADD_NEW_READER_FAILURE,
  ADD_NEW_READER_SUCCESS,
  CLEAR_FINDING_READER,
  EDIT_READER_FAILURE,
  EDIT_READER_SUCCESS,
  GET_READER_BY_BARCODE_FAILURE,
  GET_READER_BY_BARCODE_SUCCESS,
  GET_READERS_FOR_REMOVE_FAILURE,
  GET_READERS_FOR_REMOVE_SUCCESS,
  SEND_READERS_FAILURE
} from "../actions/actionTypes";

const initialState = {
  error: null,
  newReader: null,
  readers: [],
  findingReader: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_FINDING_READER:
      return {...state, findingReader: null};
    case ADD_NEW_READER_SUCCESS:
      return { ...state, newReader: action.data, error: null };
    case ADD_NEW_READER_FAILURE:
      return { ...state, error: action.error };
    case EDIT_READER_SUCCESS:
      return { ...state, newReader: action.data, error: null };
    case EDIT_READER_FAILURE:
      return { ...state, error: action.error };
    case GET_READER_BY_BARCODE_SUCCESS:
      return { ...state, findingReader: action.data, error: null };
    case GET_READER_BY_BARCODE_FAILURE:
      return { ...state, findingReader: null, error: action.error };
    case GET_READERS_FOR_REMOVE_SUCCESS:
      return { ...state, readers: action.data, error: null };
    case GET_READERS_FOR_REMOVE_FAILURE:
      return { ...state, error: action.error };
    case SEND_READERS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
