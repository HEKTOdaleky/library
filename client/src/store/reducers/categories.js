import {ADD_CATEGORY_FAILURE, ADD_CATEGORY_SUCCESS, GET_CATEGORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    categories: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {...state, categories: action.category};
      case ADD_CATEGORY_SUCCESS:
        return {...state, error: null};
      case ADD_CATEGORY_FAILURE:
        return {...state, error: action.error};
        default:
            return state;
    }
};

export default reducer;