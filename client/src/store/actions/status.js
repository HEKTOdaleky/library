import axios from "../../axios-api";
import {GET_STATUS_SUCCESS} from "./actionTypes";

const getStatusSuccess = status => {
    return {type:GET_STATUS_SUCCESS, status}
};

export const getStatus = () => {
    return dispatch => {
        axios.get('/status').then(
            response => dispatch(getStatusSuccess(response.data)),
            err => console.log(err)
        )
    }
};