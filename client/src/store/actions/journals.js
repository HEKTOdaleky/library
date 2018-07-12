import axios from "../../axios-api";
import { NotificationManager } from "react-notifications";
import { push } from "react-router-redux";
import { SEND_DATA_TO_JOURNAL_FAILURE, SEND_DATA_TO_JOURNAL_SUCCESS } from "./actionTypes";

const sendDataToJournalSuccess = data => {
  return {type: SEND_DATA_TO_JOURNAL_SUCCESS, data};
};

const sendDataToJournalFailure = error => {
  return {type: SEND_DATA_TO_JOURNAL_FAILURE, error};
};

export const sendDataToJournal = data => {
  return dispatch => {
    axios.post('/journal', data).then(
      response => {},
      error => {
        dispatch(sendDataToJournalFailure(error.response.data))
      }
    )
  }
};