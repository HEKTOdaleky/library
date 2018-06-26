import axios from "../../axios-api";
import { NotificationManager } from "react-notifications";
import { push, replace } from "react-router-redux";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "./actionTypes";

const loginUserSuccess = (user, token) => {
  return { type: LOGIN_USER_SUCCESS, user, token };
};

const loginUserFailure = error => {
  return { type: LOGIN_USER_FAILURE, error };
};

export const loginUser = userData => {
  return dispatch => {
    return axios.post("users/sessions", userData).then(
      response => {
        dispatch(loginUserSuccess(response.data.user, response.data.token));
        if (response.data.user.role === "librarian")
          dispatch(replace("/librarian"));
        if (response.data.user.role === "admin") dispatch(replace("/admin"));
        NotificationManager.success("Успешно!", response.data.message);
      },
      error => {
        const errorObj = error.response
          ? error.response.data
          : { error: "Нет соединения с интернетом!" };
        dispatch(loginUserFailure(errorObj));
      }
    );
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    const token = getState().users.user.token;
    const headers = { Token: token };
    axios.delete("users/sessions", { headers }).then(
      response => {
        dispatch({ type: LOGOUT_USER });
        dispatch(push("/"));
        NotificationManager.success("Успешно!", response.data.message);
      },
      error => {
        NotificationManager.error(
          "Нет соединения с интернетом!",
          "Выход не призведен!!!"
        );
      }
    );
  };
};
