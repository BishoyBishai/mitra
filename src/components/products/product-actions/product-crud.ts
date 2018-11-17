import { IStore } from "./../../../bin/store-modal";
import constants from "../products-constants";
import config from "../../../config/config";
import { push } from "react-router-redux";
import { PATHS } from "../../../router/routes";

export function create(product) {
  return (dispatch, getState, {  getFirestore }) => {
    const fs = getFirestore();
    const uid = (getState() as IStore).firebase.auth.uid;
    fs.collection(config.collections.products)
      .add({
        ...product,
        date_created: new Date(),
        uid,
      })
      .then(() => {
        dispatch({ type: constants.ADD_PRODUCT_SUCCESS });
        dispatch(push(PATHS.MY_PRODUCTS));
      })
      .catch(err => {
        dispatch({
          type: constants.PRODUCT_FAILED,
          payload: {
            err,
            message: "error occurred during creating new product",
          },
        });
      });
  };
}
