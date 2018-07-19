import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push, replace} from "react-router-redux";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS, DELETE_CATEGORY_FAILURE, DELETE_USER_SUCCESS, GET_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "./actionTypes";

const loginUserSuccess = (user, token) => {
    return {type: LOGIN_USER_SUCCESS, user, token};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};
const createUserError = error => {
    return {type: CREATE_USER_ERROR, error}
};
const createUserSuccess = () => {
    return {type: CREATE_USER_SUCCESS}
};

const getUserSuccess = users => {
  return {type: GET_USER_SUCCESS, users}
};

const deleteUserSuccess = success => {
  return {type: DELETE_USER_SUCCESS, success};
};

const deleteUserFailure = error => {
  return {type: DELETE_CATEGORY_FAILURE, error}
};

export const getUser = () => {
  return dispatch => {
      axios.get('/users')
        .then(response => dispatch(getUserSuccess(response.data)),
          err => console.log(err)
        )
  }
};

export const createNewUser = (data) => {
    return dispatch => {
        axios.post('/users', data).then(response => {
            dispatch(createUserSuccess());
            dispatch(push("/"));
            NotificationManager.success("Успешно!", response.data.message);

        }, error => {
            dispatch(createUserError(error.response.data));
            NotificationManager.error(
                "Ошибка!!!"
            );
        })
    }
};

export const deleteUser = data => {
  return dispatch => {
    axios.delete('/users/delete-user/' + data).then(
      response => {
        dispatch(deleteUserSuccess(response.data));
        dispatch(push('/admin'));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(deleteUserFailure(error.response));
        NotificationManager.error("Пользователь не может быть удален!");
      }
    )
  }
}
export const changeUserPassword = data => {
    return dispatch => {
        axios.post('users/change-password', data).then(response => {
            dispatch(push("/"));
            NotificationManager.success(response.data.message);

        }, error => {
            dispatch(createUserError(error.response.data));
            NotificationManager.error(error.response.data.message);
        })
    }
};

export const loginUser = userData => {
    return dispatch => {
        return axios.post("/users/sessions", userData).then(
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
                    : {error: "Нет соединения с интернетом!"};
                dispatch(loginUserFailure(errorObj));
            }
        );
    };
};

export const logoutUser = () => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {Token: token};
        axios.delete("/users/sessions", {headers}).then(
            response => {
                dispatch({type: LOGOUT_USER});
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
