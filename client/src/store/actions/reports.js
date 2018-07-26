import axios from "../../axios-api";
import {GET_FULL_REPORT_FAILURE, GET_FULL_REPORT_SUCCESS} from "./actionTypes";
import {NotificationManager} from "react-notifications";

const getFullReportSuccess = list => {
    return {type: GET_FULL_REPORT_SUCCESS, list}
};

const getFullReportError = err => {
    return {type: GET_FULL_REPORT_FAILURE, err}
};

export const getFullReport = (startdate, enddate) => {
    return dispatch => {
        axios.post('/journal/report').then(response => {
                dispatch(getFullReportSuccess(response.data));
                NotificationManager.success(response.data.message);

            },
            error => {
                dispatch(getFullReportError(error.response.data));
                NotificationManager.error(error.response.data.message);

            })
    }
};