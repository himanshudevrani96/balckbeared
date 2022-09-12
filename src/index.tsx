import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/App";
import { Provider } from "react-redux";
import store from "./logic/store";
import * as serviceWorker from "./serviceWorker";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./wallet_helpers/getLibrary";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <App />
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
