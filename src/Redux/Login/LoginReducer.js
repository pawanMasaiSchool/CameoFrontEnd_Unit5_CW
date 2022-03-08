import {
    actionTypes
  } from "./actionTypes";
  
  import { loadData, removeData, saveData } from "../../utils/localStorage";

  const token = loadData("token") || null;

  const user= loadData("user") || null

  const initLogin = {
    isAuth: token !== null,
    token: token,
    user: user
  };
  
  const LoginReducer = (currentState = initLogin, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_SUCCESS: {
        saveData("token",action.payload.token)
        saveData("user",action.payload.user)
        return {
          ...currentState,
          isAuth: true,
          token: action.payload.token,
          user: action.payload.user
        };
      }
      case actionTypes.LOGOUT_SUCCESS:{
        removeData("token")
        removeData("user")
        return{
          ...currentState,
          isAuth:false,
          token:null,
          user:null
        }
      }
      default: {
        return currentState;
      }
    }
  };
  
  export default LoginReducer;
  