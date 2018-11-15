import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";
import { store, localHistory as history } from "./../bin/store";
import App from "../components/index";
import { PATHS } from "./routes";

export const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={PATHS.INDEX} component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
