import axios from "../../axios-api";
import {GET_CATEGORY_SUCCESS} from "./actionTypes";

const getCategorySuccess = category => {
    return {type:GET_CATEGORY_SUCCESS, category}
};

export const getCategories = () => {
    return dispatch => {
        axios.get('/categories').then(
            response => dispatch(getCategorySuccess(response.data)),
            err => console.log(err)
        )
    }
};