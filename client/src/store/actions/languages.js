import axios from "../../axios-api";
import {
    BOOK_POST_DATA_FAILURE,
    BOOK_POST_DATA_SUCCESS, DELETE_LANGUAGES_FAILURE, DELETE_LANGUAGES_SUCCESS,
    GET_LANGUAGES_SUCCESS,
    LANGUAGE_POST_DATA_FAILURE,
    LANGUAGE_POST_DATA_SUCCESS
} from "./actionTypes";
import {push} from "react-router-redux";
import {NotificationManager} from "react-notifications";

const getLanguagesSuccess = lang => {
    return {type:GET_LANGUAGES_SUCCESS, lang}
};

export const getLanguage = () => {
    return dispatch => {
        axios.get('/language').then(
            response => dispatch(getLanguagesSuccess(response.data)),
            err => console.log(err)
        )
    }
};

const languagePostDataSuccess = lang => {
  return {type: LANGUAGE_POST_DATA_SUCCESS, lang}
};

const languagePostDataError = languageError => {
  return {type: LANGUAGE_POST_DATA_FAILURE, languageError}
};

const langDeleteSuccess = success => {
    return {type: DELETE_LANGUAGES_SUCCESS, success}
};

const langDeleteError = error => {
    return {type: DELETE_LANGUAGES_FAILURE, error}
};
export const postLanguagesData = (data) => {
  return dispatch => {
    axios.post("/language", data).then(response => {
      dispatch(languagePostDataSuccess(response.data));
      dispatch(push("/admin"));
      NotificationManager.success(response.data.message);
    }, err => {
      dispatch(languagePostDataError(err.response.data));
      if (err.response.data.error) NotificationManager.error(err.response.data.error.errors.title.message);
      if (err.response.data.message) NotificationManager.error(err.response.data.message);
    })
  }
};

export const deleteLang = (data) => {
    return dispatch => {
        axios.delete('/language/' + data).then(
            response => {
                dispatch(langDeleteSuccess(response.data));
                dispatch(push("/admin"));
                NotificationManager.success(response.data.message);
            },
            err => {
                dispatch(langDeleteError(err.response));
                NotificationManager.error(err.response.data.message);
            }
        )
    }
};