import { combineReducers } from "redux";

import connection from "../components/connection/connectionSlice";
import project from "../components/project/projectSlice";

const appReducer = combineReducers({ connection, project });

export default appReducer;
