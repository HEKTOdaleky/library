import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";
import {ADD_GROUP_FAILURE, ADD_GROUP_SUCCESS, GET_GROUPS_FAILURE, GET_GROUPS_SUCCESS} from "./actionTypes";

const addGroupSuccess = group => {
  return {type: ADD_GROUP_SUCCESS, group};
};

const addGroupFailure = postError => {
  return {type: ADD_GROUP_FAILURE, postError};
};

export const addGroup = data => {
  return dispatch => {
    axios.post('/groups', data)
      .then(response => {
        dispatch(addGroupSuccess(response.data));
        dispatch(push("/admin"));
        NotificationManager.success(response.data.message);
      }).catch(error => {
        dispatch(addGroupFailure(error.response.data));
        NotificationManager.error(error.response.data.message);
      });
  };
};


const getGroupsSuccess = data => {
  return {type: GET_GROUPS_SUCCESS, data};
};

const getGroupsFailure = error => {
  return {type: GET_GROUPS_FAILURE, error};
};

export const getGroups = () => {
  return dispatch => {
    return axios.get('/groups').then(
      response => dispatch(getGroupsSuccess(response.data)),
      error => dispatch(getGroupsFailure(error))
    )
  }
};
