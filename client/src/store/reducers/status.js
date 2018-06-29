import {GET_STATUS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    status: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STATUS_SUCCESS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export default reducer;