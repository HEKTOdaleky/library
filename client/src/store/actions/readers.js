import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";

import {ADD_NEW_READER_FAILURE, ADD_NEW_READER_SUCCESS} from "./actionTypes";

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
        NotificationManager.success("Новый читатель успешно добавлен");
      },
      error => {
        dispatch(addNewReaderFailure(error.response.data));
        NotificationManager.error(error.response.data.message);
      }
    )
  }
};

