import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {
  ADD_NEW_READER_FAILURE,
  ADD_NEW_READER_SUCCESS,
  GET_READERS_FOR_REMOVE_FAILURE,
  GET_READERS_FOR_REMOVE_SUCCESS, SEND_READERS_FAILURE, SEND_READERS_SUCCESS
} from "./actionTypes";

const addNewReaderSuccess = data => {
  return {type: ADD_NEW_READER_SUCCESS, data};
};

const addNewReaderFailure = error => {
  return {type: ADD_NEW_READER_FAILURE, error};
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

const getReadersForRemoveSuccess = data => {
  return {type: GET_READERS_FOR_REMOVE_SUCCESS, data};
};

const getReadersForRemoveFailure = error => {
  return {type: GET_READERS_FOR_REMOVE_FAILURE, error};
};

export const getReadersForRemove = () => {
  return dispatch => {
    axios.get('/reader').then(
      response => {
        dispatch(getReadersForRemoveSuccess(response.data))
      },
      error => {
        dispatch(getReadersForRemoveFailure(error.response.data))
      }
    )
  }
};

const sendReadersSuccess = data => {
  return {type: SEND_READERS_SUCCESS, data};
};

const sendReadersFailure = error => {
  return {type: SEND_READERS_FAILURE, error};
};

export const sendReaders = readersData => {
  return dispatch => {
    axios.delete('/reader', {data: readersData}).then(
      response => {
        dispatch(sendReadersSuccess(response.data));
        dispatch(push('/admin'));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(sendReadersFailure(error.response.data))
      }
    )
  }
};