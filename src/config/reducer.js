import { combineReducers } from "redux";

import connection from "../components/connection/connectionReducer";
import project from "../components/project/projectReducer";

const appReducer = combineReducers({ connection, project });

export default appReducer;
