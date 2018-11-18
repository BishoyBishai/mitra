import * as React from "react";
import * as ReactDOM from "react-dom";
import { router } from "./router";
import { store } from "./bin/store";
import "./assets/scss/style.scss";
/* ================================================== */
(store as any).firebaseAuthIsReady.then(() => {
  ReactDOM.render(router, document.getElementById("app"));
});
