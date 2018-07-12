import axios from "../../axios-api";
import { NotificationManager } from "react-notifications";
// import { push } from "react-router-redux";
import { SEND_DATA_TO_JOURNAL_FAILURE, SEND_DATA_TO_JOURNAL_SUCCESS } from "./actionTypes";
import { push } from "react-router-redux";

const sendDataToJournalSuccess = data => {
  return {type: SEND_DATA_TO_JOURNAL_SUCCESS, data};
};

const sendDataToJournalFailure = error => {
  return {type: SEND_DATA_TO_JOURNAL_FAILURE, error};
};

export const sendDataToJournal = data => {
  return dispatch => {
    axios.post('/journal', data).then(
      response => {
        dispatch(sendDataToJournalSuccess(response.data));
        dispatch(push("/librarian"));
        NotificationManager.success(response.data.message);
      },
      error => {
        dispatch(sendDataToJournalFailure(error.response.data));
        if (error.response.data.error)
          NotificationManager.error(error.response.data.error);
        if (error.response.data.message)
          NotificationManager.info(error.response.data.message);
      }
    )
  }
};