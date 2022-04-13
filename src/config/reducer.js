import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const appReducer = combineReducers({});

export default persistReducer(appReducer);
