import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import appReducer from "./reducer";

export const store = createStore(appReducer, {}, composeWithDevTools());
