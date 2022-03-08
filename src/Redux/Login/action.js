import {
  actionTypes,
} from "./actionTypes";
  
export const loginsuccess = (token,user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload:{token,user}
});
  