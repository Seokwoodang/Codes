import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer"
import thunk from "redux-thunk";
import signing from "./signing"
import comment from "./two";
import { combineReducers } from "redux";

const middlewares = [thunk];

const rootReducer= combineReducers({
    reducer,
    signing,
    comment,
});

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer,enhancer);

export default store;