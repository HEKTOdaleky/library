import {ADD_GROUP_FAILURE, ADD_GROUP_SUCCESS} from "../actions/actionTypes";

const initialState = {
  groups: [],
  postError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP_SUCCESS:
      return {...state, postError: null};
    case ADD_GROUP_FAILURE:
      return {...state, postError: action.postError};
    default:
      return state;
  }
};

export default reducer;