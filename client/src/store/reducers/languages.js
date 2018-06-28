import {GET_LANGUAGES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    languages: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LANGUAGES_SUCCESS:
            return {...state, languages: action.lang};
        default:
            return state;
    }
};

export default reducer;