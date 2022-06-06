import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer"
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(reducer,enhancer);

export default store;