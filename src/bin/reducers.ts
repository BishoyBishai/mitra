import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import productsReducer from "../components/products/products-reducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "../components/auth/auth-reducer";

export const reducers = combineReducers({
  router,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  products: productsReducer,
  auth: authReducer,
});
