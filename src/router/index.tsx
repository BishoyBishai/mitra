import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, localHistory as history } from "./../bin/store";
import App from "../components/index";

export const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);
