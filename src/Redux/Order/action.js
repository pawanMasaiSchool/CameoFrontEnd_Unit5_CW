import { actionTypes } from "./actionTypes";

export const createorder = (payload) => ({
    type: actionTypes.CREATE_ORDER,
    payload
  });

export const clearorder= ()=>({
    type:actionTypes.CLEAR_ORDER
})

export const addprice= (price)=>({
    type: actionTypes.ADD_PRICE,
    payload:price
})