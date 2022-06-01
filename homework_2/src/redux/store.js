import { createStore,combineReducers, applyMiddleware,compose } from "redux";
import reducer from "./reducer/reducer"
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer=applyMiddleware(...middlewares);

let store = createStore(reducer, enhancer);

export default store;