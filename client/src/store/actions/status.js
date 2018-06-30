import axios from "../../axios-api";
import {GET_STATUS_SUCCESS, POST_STATUS_FAILURE, POST_STATUS_SUCCESS} from "./actionTypes";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

const getStatusSuccess = status => {
    return {type: GET_STATUS_SUCCESS, status}
};

const postStatusError = err => {
    return {type: POST_STATUS_FAILURE, err}
};
const postStatusSuccess = err => {
    return {type: POST_STATUS_SUCCESS, err}
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
                NotificationManager.success("Успешно!");
            },
            err => postStatusError(err.response.data)
        )
    }
};