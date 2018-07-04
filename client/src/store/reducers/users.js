import {
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER
} from "../actions/actionTypes";


const initialState = {
    loginError: null,
    user: null,
    token: null,
    createError: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state, user: action.user, token: action.token, loginError: null,
                createError: null
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state, loginError: action.error,
                createError: null
            };
        case LOGOUT_USER:
            return {
                ...state, user: null, token: null,
                createError: null
            };
        case CREATE_USER_ERROR:
            return {...state, createError: action.error};
        case CREATE_USER_SUCCESS:
            return {...state, createError: null};
        default:
            return state;
    }
};

export default reducer;