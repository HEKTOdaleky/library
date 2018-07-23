import axios from "../../axios-api";
import { NotificationManager } from "react-notifications";
import { push } from "react-router-redux";
import {
  ADD_GROUP_FAILURE,
  ADD_GROUP_SUCCESS, DELETE_GROUP_FAILURE, DELETE_GROUP_SUCCESS,
  GET_GROUPS_FAILURE,
  GET_GROUPS_SUCCESS
} from "./actionTypes";

const addGroupSuccess = group => {
  return { type: ADD_GROUP_SUCCESS, group };
};

const addGroupFailure = postError => {
  return { type: ADD_GROUP_FAILURE, postError };
};

export const addGroup = data => {
  return dispatch => {
    axios
      .post("/groups", data)
      .then(response => {
        dispatch(addGroupSuccess(response.data));
        dispatch(push("/admin"));
        NotificationManager.success(response.data.message);
      })
      .catch(error => {
        dispatch(addGroupFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      });
  };
};

const getGroupsSuccess = data => {
  return { type: GET_GROUPS_SUCCESS, data };
};

const getGroupsFailure = error => {
  return { type: GET_GROUPS_FAILURE, error };
};

export const getGroups = () => {
  return dispatch => {
    return axios.get("/groups").then(
      response => dispatch(getGroupsSuccess(response.data)),
      error => dispatch(getGroupsFailure(error))
    );
  };
};

const deleteGroupSuccess = data => {
  return { type: DELETE_GROUP_SUCCESS, data };
};

const deleteGroupFailure = error => {
  return { type: DELETE_GROUP_FAILURE, error };
};

export const deleteGroup = id => {
  return dispatch => {
    axios.delete('/groups/' + id ).then(
      response => {
        dispatch(deleteGroupSuccess(response.data));
        NotificationManager.success(response.data.message);
        dispatch(push("/admin"));
      },
      error => {
        dispatch(deleteGroupFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};