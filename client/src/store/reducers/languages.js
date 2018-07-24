import {
  GET_LANGUAGES_SUCCESS,
  LANGUAGE_POST_DATA_FAILURE, LANGUAGE_POST_DATA_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    languages: [],
    languageError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LANGUAGES_SUCCESS:
            return {...state, languages: action.lang};
      case LANGUAGE_POST_DATA_SUCCESS:
        return {...state, languageError: null};
      case LANGUAGE_POST_DATA_FAILURE:
        return {...state, languageError: action.languageError};
        default:
            return state;
    }
};

export default reducer;