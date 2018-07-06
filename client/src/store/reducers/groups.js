import {
  ADD_GROUP_FAILURE,
  ADD_GROUP_SUCCESS, DELETE_GROUP_FAILURE,
  GET_GROUPS_FAILURE,
  GET_GROUPS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  groups: [],
  error: null,
  postError: null,
  deleteError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP_SUCCESS:
      return {...state, postError: null};
    case ADD_GROUP_FAILURE:
      return {...state, postError: action.postError};
    case GET_GROUPS_SUCCESS:
      return {...state, groups: action.data};
    case GET_GROUPS_FAILURE:
      return {...state, error: action.error};
    case DELETE_GROUP_FAILURE:
      return {...state, deleteError: action.error};
    default:
      return state;
  }
};

export default reducer;