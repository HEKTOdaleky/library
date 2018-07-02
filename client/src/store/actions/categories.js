import axios from "../../axios-api";

import {ADD_CATEGORY_SUCCESS, GET_CATEGORY_SUCCESS} from "./actionTypes";
import {push} from "react-router-redux";
import {NotificationManager} from "react-notifications";

const getCategorySuccess = category => {
  return {type: GET_CATEGORY_SUCCESS, category}
};

export const getCategories = () => {
  return dispatch => {
    axios.get('/categories').then(
      response => dispatch(getCategorySuccess(response.data)),
      err => console.log(err)
    )
  }
};

export const addCategorySuccess = () => {
  return {type: ADD_CATEGORY_SUCCESS}
};

export const addCategory = categoryData => {
  return dispatch => {
    return axios.post('/categories', categoryData).then(
      response => {
        dispatch(addCategorySuccess());
        dispatch(push('/admin'));
        NotificationManager.success("Успешно!", response.data.message);
      }
    )
  }
};