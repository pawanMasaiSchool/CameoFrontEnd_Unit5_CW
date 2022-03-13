
import {
  ADMIN_SUBMIT_FAILURE,
  ADMIN_SUBMIT_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
} from "./actionTypes";

const submitAdminRequest = () => ({
  type: ADMIN_SUBMIT_REQUEST
});

const AdminLoginSuccess = () => ({
  type: ADMIN_LOGIN_SUCCESS,
});
const submitAdminFailure = () => ({
  type: ADMIN_SUBMIT_FAILURE
});

const AdminLogoutSuccess = () => ({
  type: ADMIN_LOGOUT_SUCCESS
})

export {
  submitAdminRequest,
  AdminLoginSuccess,
  submitAdminFailure,
  AdminLogoutSuccess
};
