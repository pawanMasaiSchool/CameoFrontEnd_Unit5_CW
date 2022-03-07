import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS
  } from "./actionTypes";
  
  const initLogin = {
    LoginIsLoading: false,
    LoginIsError: false
  };
  
  const LoginReducer = (currentState = initLogin, action) => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        return {
          ...currentState,
          LoginIsLoading: true,
          LoginIsError: false
        };
      }
  
      case LOGIN_REQUEST_SUCCESS: {
        return {
          ...currentState,
          LoginIsLoading: false,
          LoginIsError: false,
        };
      }
  
      case LOGIN_REQUEST_FAILURE: {
        return {
          ...currentState,
          LoginIsLoading: false,
          LoginIsError: true
        };
      }
  
      default: {
        return currentState;
      }
    }
  };
  
  export default LoginReducer;
  