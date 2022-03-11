import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/AdminRedcuer";
import CategoryReducer from "./Category/CategoryReducer";
import LoginReducer from "./Login/LoginReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  admin: adminReducer,
  category: CategoryReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const myEnhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = createStore(rootReducer, myEnhancer);
