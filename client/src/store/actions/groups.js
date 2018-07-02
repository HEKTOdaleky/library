import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";
import {ADD_GROUP_FAILURE, ADD_GROUP_SUCCESS} from "./actionTypes";

const addGroupSuccess = group => {
  return {type: ADD_GROUP_SUCCESS, group};
};

const addGroupFailure = postError => {
  return {type: ADD_GROUP_FAILURE, postError};
};

export const addGroup = data => {
  return dispatch => {
    axios.post('/group', data)
      .then(response => {
        dispatch(addGroupSuccess(response.data));
        dispatch(push("/admin"));
        NotificationManager.success("Успешно!");
      }).catch(error => {
        dispatch(addGroupFailure(error.response.data));
    });
  };
};