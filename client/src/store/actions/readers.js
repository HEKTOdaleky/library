import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {
  ADD_NEW_READER_FAILURE, ADD_NEW_READER_SUCCESS, CLEAR_FINDING_READER, EDIT_READER_FAILURE, EDIT_READER_SUCCESS,
  GET_READER_BY_PIN_FAILURE,
  GET_READER_BY_PIN_SUCCESS
} from "./actionTypes";

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

const getReaderByPinSuccess = data => {
  return {type: GET_READER_BY_PIN_SUCCESS, data};
};

const getReaderByPinFailure = error => {
  return {type: GET_READER_BY_PIN_FAILURE, error};
};

export const clearFindingReader = () => {
  return {type: CLEAR_FINDING_READER};
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

export const getReaderByPin = pin => {
  return dispatch => {
    return axios.get(`/reader/:${pin}`).then(
      response => {
        dispatch(getReaderByPinSuccess(response.data));
      },
      error => {
        dispatch(getReaderByPinFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};