import axios from "../../axios-api";
import {
    DELETE_STATUS_FAILURE,
    DELETE_STATUS_SUCCESS,
    GET_STATUS_SUCCESS,
    POST_STATUS_FAILURE,
    POST_STATUS_SUCCESS
} from "./actionTypes";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

const getStatusSuccess = status => {
    return {type: GET_STATUS_SUCCESS, status}
};

const postStatusError = err => {
    return {type: POST_STATUS_FAILURE, err}
};
const postStatusSuccess = success => {
    return {type: POST_STATUS_SUCCESS, success}
};

const deleteStatusSuccess = success => {
    return {type: DELETE_STATUS_SUCCESS, success}
};

const deleteStatusError = error => {
    return {type: DELETE_STATUS_FAILURE, error}
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
            response => {
                dispatch(postStatusSuccess(response.data));
                dispatch(push("/admin"));
                NotificationManager.success(response.data.message);
            },
            err => {
                dispatch(postStatusError(err.response.data));
                NotificationManager.error(err.response.data.message);

            }
        )
    }
};

export const deleteStatus = (data) => {
    return dispatch => {
        axios.delete('/status/' + data).then(
            response => {
                dispatch(deleteStatusSuccess(response.data));
                dispatch(push("/admin"));
                NotificationManager.success(response.data.message);
            },
            err => {
                dispatch(deleteStatusError(err.response));
                NotificationManager.error(err.response.data.message);
            }
        )
    }
};