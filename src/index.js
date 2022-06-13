import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
