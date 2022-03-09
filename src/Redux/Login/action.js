import {
  actionTypes,
} from "./actionTypes";
  
export const loginsuccess = (token,user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload:{token,user}
});

export const logoutsuccess= ()=>({
  type:actionTypes.LOGOUT_SUCCESS
})