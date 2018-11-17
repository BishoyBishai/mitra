import { IStore } from "./../../../bin/store-modal";
import constants from "../products-constants";
import config from "../../../config/config";
import { push } from "react-router-redux";
import { PATHS } from "../../../router/routes";
import { getReduxAction } from "../../../helper/redux";

export function create(product) {
  return (dispatch, getState, { getFirestore }) => {
    const fs = getFirestore();
    const uid = (getState() as IStore).firebase.auth.uid;
    fs.collection(config.collections.products)
      .add({
        ...product,
        date_created: new Date(),
        uid,
      })
      .then(() => {
        dispatch(getReduxAction(constants.ADD_PRODUCT_SUCCESS));
        dispatch(push(PATHS.PRODUCTS));
      })
      .catch(err => {
        dispatch(
          getReduxAction(constants.PRODUCT_FAILED, {
            err,
            message: "error occurred during creating new product",
          }),
        );
      });
  };
}
