import { SEND_DATA_TO_JOURNAL_FAILURE } from "../actions/actionTypes";

const initialState = {
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_DATA_TO_JOURNAL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default reducer;