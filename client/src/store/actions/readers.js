import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {ADD_NEW_READER_FAILURE, ADD_NEW_READER_SUCCESS, EDIT_READER_FAILURE, EDIT_READER_SUCCESS} from "./actionTypes";

const addNewReaderSuccess = data => {
  return {type: ADD_NEW_READER_SUCCESS, data};
};

const addNewReaderFailure = error => {
  return {type: ADD_NEW_READER_FAILURE, error};
};

const editReaderSuccess = data => {
  return {type: EDIT_READER_SUCCESS, data};
};

const editReaderFailure = error => {
  return {type: EDIT_READER_FAILURE, error};
};

export const addNewReader = data => {
  return dispatch => {
    return axios.post('/reader', data).then(
      response => {
        dispatch(addNewReaderSuccess(response.data));
        dispatch(push('/admin'));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(addNewReaderFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};

export const editReader = data => {
  return dispatch => {
    return axios.put(`/reader/${data._id}`, data).then(
      response => {
        dispatch(editReaderSuccess(response.data));
        dispatch(push('/admin'));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(editReaderFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};