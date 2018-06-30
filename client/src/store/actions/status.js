import axios from "../../axios-api";
import {GET_STATUS_SUCCESS, POST_STATUS_FAILURE} from "./actionTypes";

const getStatusSuccess = status => {
    return {type: GET_STATUS_SUCCESS, status}
};

const postStatusError = err => {
    return {type: POST_STATUS_FAILURE, err}
};

export const getStatus = () => {
    return dispatch => {
        axios.get('/status').then(
            response => dispatch(getStatusSuccess(response.data)),
            err => console.log(err)
        )
    }
};

export const postStatus = (data) => {
    return dispatch => {
        axios.post('/status', data).then(
            response => dispatch(),
            err => postStatusError(err.response.data)
        )
    }
};