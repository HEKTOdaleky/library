import axios from "../../axios-api";
import {GET_LANGUAGES_SUCCESS} from "./actionTypes";

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