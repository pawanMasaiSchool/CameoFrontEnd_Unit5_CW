import { actionTypes } from "./actionTypes";

export const createorder = (payload) => ({
    type: actionTypes.CREATE_ORDER,
    payload
  });

export const clearorder= ()=>({
    type:actionTypes.CLEAR_ORDER
})

export const addprice= (payload)=>({
    type: actionTypes.ADD_PRICE,
    payload
})