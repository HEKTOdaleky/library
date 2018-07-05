import axios from "../../axios-api";

import {
  ADD_CATEGORY_FAILURE, ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_SUCCESS
} from "./actionTypes";
import { push } from "react-router-redux";
import { NotificationManager } from "react-notifications";

const getCategorySuccess = category => {
  return { type: GET_CATEGORY_SUCCESS, category };
};

export const getCategories = () => {
  return dispatch => {
    axios
      .get("/categories")
      .then(
        response => dispatch(getCategorySuccess(response.data)),
        err => console.log(err)
      );
  };
};

const addCategorySuccess = data => {
  return { type: ADD_CATEGORY_SUCCESS, data };
};

const addCategoryFailure = error => {
  return { type: ADD_CATEGORY_FAILURE, error };
};

export const addCategory = categoryData => {
  return dispatch => {
    return axios.post("/categories", categoryData).then(
      response => {
        dispatch(addCategorySuccess(response.data));
        dispatch(push("/admin"));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(addCategoryFailure(error.response.data));
        if (error.response.data.error) NotificationManager.error(error.response.data.error);
        if (error.response.data.message) NotificationManager.info(error.response.data.message);
      }
    );
  };
};

const deleteCategorySuccess = success => {
  return {type: DELETE_CATEGORY_SUCCESS, success}
};

const deleteCategoryError = error => {
  return {type: DELETE_CATEGORY_FAILURE, error}
};

export const deleteCategory = (data) => {
  return dispatch => {
    axios.delete('/categories/' + data).then(
      response => {
        dispatch(deleteCategorySuccess(response.data));
        dispatch(push("/admin"));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(deleteCategoryError(error.response));
        NotificationManager.error(error.response.data.error);
      }
    )
  }
};