import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import productsReducer from "../components/products/products-reducer";
export const reducers = combineReducers({
  router,
  products: productsReducer
});
