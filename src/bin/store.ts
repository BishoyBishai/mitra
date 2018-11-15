import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { reducers } from "./reducers";
import promise from "redux-promise-middleware";

export const localHistory = createHistory();
const middleware = applyMiddleware(
  promise(),
  thunk,
  routerMiddleware(localHistory),
  createLogger()
);
export const store = createStore(reducers, middleware);
