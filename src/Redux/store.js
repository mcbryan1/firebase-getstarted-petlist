import { createStore, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./Reducers/authReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));

let persister = persistStore(store)

export  {store, persister};
