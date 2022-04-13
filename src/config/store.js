import { compose, createStore } from "redux";

import { persistStore } from "redux-persist";

import rootReducer from "config/reducers";

// Redux chrome debugger setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers);

export const persistor = persistStore(store);
