import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS
  } from "./actionTypes";
  
  export const loginRequest = () => ({
    type: LOGIN_REQUEST
  });
  
  export const loginRequestSuccess = () => ({
    type: LOGIN_REQUEST_SUCCESS,
  });
  
  export const loginRequestFailure = () => ({
    type: LOGIN_REQUEST_FAILURE
  });
  