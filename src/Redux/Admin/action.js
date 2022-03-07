import axios from "axios";
import {
  ADMIN_SUBMIT_FAILURE,
  ADMIN_SUBMIT_REQUEST,
  ADMIN_SUBMIT_SUCCESS,
} from "./actionTypes";

const submitAdminRequest = () => ({
  type: ADMIN_SUBMIT_REQUEST
});

const submitAdminSuccess = (data) => ({
  type: ADMIN_SUBMIT_SUCCESS,
  payload: {
    data
  }
});
const submitAdminFailure = () => ({
  type: ADMIN_SUBMIT_FAILURE
});


export {
  getUsers,
  submitAdminRequest,
  submitAdminSuccess,
  submitAdminFailure,
};
