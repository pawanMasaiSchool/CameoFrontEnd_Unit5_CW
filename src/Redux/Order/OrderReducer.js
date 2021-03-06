import { actionTypes } from "./actionTypes";

const initOrder={
    fore:"",
    from:"",
    occassion:"",
    instructions:"",
    optional:"",
    price:"",
    celeb_id:"",
    celeb_name:"",
    celeb_img:""
}
const OrderReducer = (currentState = initOrder, action) => {
    switch (action.type) {
      case actionTypes.CREATE_ORDER: {
        return {
            ...currentState,
            fore:action.payload.fore,
            from:action.payload.from,
            occassion:action.payload.occassion,
            instructions:action.payload.instructions,
            optional:action.payload.optional,
            celeb_id:action.payload.celeb_id
        };
      }
      case actionTypes.CLEAR_ORDER:{
        return{
            ...currentState,
            fore:"",
            from:"",
            occassion:"",
            instructions:"",
            optional:"",
            price:"",
            celeb_id:'',
            celeb_name:"",
            celeb_img:""
        }
      }
      case actionTypes.ADD_PRICE:{
          return{
              ...currentState,price:action.payload.price,
              celeb_name:action.payload.celeb_name,
              celeb_img: action.payload.celeb_img
          }
      }
      default:{
          return(currentState)
      }
}
}

export default OrderReducer