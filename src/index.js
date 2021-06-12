import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // the react redux plugin
import { BrowserRouter } from "react-router-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { createHashHistory } from 'history'

import store from "./store"; // we haven't built the redux/react config yet - vanilla redux
import App from "./app.js";

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
const history = createHashHistory()

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter history={history}>
    <Entry />
  </BrowserRouter>,
  root
);
