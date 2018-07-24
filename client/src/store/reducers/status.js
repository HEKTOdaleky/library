import {GET_STATUS_SUCCESS, POST_STATUS_FAILURE} from "../actions/actionTypes";

const initialState = {
    status: [],
    err: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATUS_SUCCESS:
            return {...state, status: action.status, err: null};
        case POST_STATUS_FAILURE:
            return {...state, err: action.err};
        default:
            return state;
    }
};

export default reducer;