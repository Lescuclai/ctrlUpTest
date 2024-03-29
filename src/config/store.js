import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, reduxDevtools);

export const persistor = persistStore(store);
