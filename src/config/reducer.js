import { combineReducers } from "redux";

import connection from "../components/connection/connectionReducer";

const appReducer = combineReducers({ connection });

export default appReducer;
