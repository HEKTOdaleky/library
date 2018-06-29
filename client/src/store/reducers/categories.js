import {GET_CATEGORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    categories: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {...state, categories: action.category};
        default:
            return state;
    }
};

export default reducer;