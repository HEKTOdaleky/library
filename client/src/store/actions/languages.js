import axios from "../../axios-api";
import {GET_LANGUAGES_SUCCESS, LANGUAGE_POST_DATA_FAILURE, LANGUAGE_POST_DATA_SUCCESS} from "./actionTypes";
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

const languagePostDataSuccess = language => {
  return {type: LANGUAGE_POST_DATA_SUCCESS, language}
};

const languagePostDataError = languageError => {
  return {type: LANGUAGE_POST_DATA_FAILURE, languageError}
};

export const postLanguagesData = (data) => {
  return dispatch => {
    axios.post("languages/", data).then(response => {
      dispatch(languagePostDataSuccess(response.data));
      dispatch(push("/admin"));
      NotificationManager.success("Успешно!");
    }, err => {
      dispatch(languagePostDataError(err.response.data));
    })
  }
};