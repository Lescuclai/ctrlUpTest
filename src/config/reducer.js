import { combineReducers } from "redux";

import connection from "../components/connection/connectionReducer";
import project from "../components/project/projectSlice";

const appReducer = combineReducers({ connection, project });

export default appReducer;
