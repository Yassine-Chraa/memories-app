import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

const ReactDOM = createRoot(document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
);
