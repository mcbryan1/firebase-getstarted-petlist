import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";

let store = createStore(authReducer, applyMiddleware(thunk));

export default store;
