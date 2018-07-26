import {GET_FULL_REPORT_SUCCESS} from "../actions/actionTypes";

const initialState = {
    list: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FULL_REPORT_SUCCESS:{}
            return {...state, list: action.list};
        default:
            return state;
    }
};

export default reducer;
