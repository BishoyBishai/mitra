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
        dispatch(
          getReduxAction(
            constants.PRODUCT_ACTION_SUCCESS,
            " Product has been added successfully",
          ),
        );
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

export function update(product) {
  return (dispatch, getState, { getFirestore }) => {
    const fs = getFirestore();
    const uid = (getState() as IStore).firebase.auth.uid;
    if (uid == product.uid)
      fs.collection(config.collections.products)
        .doc(product.id)
        .update({
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
        })
        .then(() => {
          dispatch(
            getReduxAction(
              constants.PRODUCT_ACTION_SUCCESS,
              " Product has been updated successfully",
            ),
          );
          dispatch(push(PATHS.PRODUCTS));
        })
        .catch(err => {
          dispatch(
            getReduxAction(constants.PRODUCT_FAILED, {
              err,
              message: "error occurred during updating product",
            }),
          );
        });
    else
      dispatch(
        getReduxAction(constants.PRODUCT_FAILED, {
          err: "authorized error",
          message: "you are not authorized to update this product",
        }),
      );
  };
}

export function remove(product) {
  return (dispatch, getState, { getFirestore }) => {
    const fs = getFirestore();
    const uid = (getState() as IStore).firebase.auth.uid;
    if (uid == product.uid)
      fs.collection(config.collections.products)
        .doc(product.id)
        .delete()
        .then(() => {
          dispatch(
            getReduxAction(
              constants.PRODUCT_ACTION_SUCCESS,
              " Product has been deleted successfully",
            ),
          );
          dispatch(push(PATHS.PRODUCTS));
        })
        .catch(err => {
          dispatch(
            getReduxAction(constants.PRODUCT_FAILED, {
              err,
              message: "error occurred during deleting new product",
            }),
          );
        });
    else
      dispatch(
        getReduxAction(constants.PRODUCT_FAILED, {
          err: "authorized error",
          message: "you are not authorized to update this product",
        }),
      );
  };
}
