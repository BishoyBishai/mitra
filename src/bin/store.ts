import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { reducers } from "./reducers";
import promise from "redux-promise-middleware";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import fb from "./../bin/firebase";

export const localHistory = createHistory();
const middleware = compose(
  applyMiddleware(
    promise(),
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    routerMiddleware(localHistory),
    createLogger(),
  ),
  reduxFirestore(fb),
  reactReduxFirebase(fb, {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady:true
  }),
);
export const store = createStore(reducers, middleware);
