import { PATHS } from "./../../../router/routes";
import { IStore } from "./../../../bin/store-modal";
import { create, update } from "./../product-actions/product-crud";
import { connect } from "react-redux";
import ProductForm from ".";
import { dismiss } from "../product-actions/product-layout";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import config from "../../../config/config";
import { getProductById } from "../helpers";
import { IFormTypeEnum } from "../product-modal";

const mapDispatchToProps = dispatch => ({
  create: product => dispatch(create(product)),
  update: product => dispatch(update(product)),
  dismiss: () => dispatch(dismiss()),
});

const mapStateToProps = (store: IStore, props) => {
  const product = getProductById(store, props);
  return {
    message: store.products.productsState,
    error: store.products.productError,
    product: product,
    formType:
      props.match.path === PATHS.EDIT_PRODUCT()
        ? IFormTypeEnum.UPDATE
        : IFormTypeEnum.CREATE,
  };
};

export default compose<any>(
  firestoreConnect([{ collection: config.collections.products }]),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ProductForm);
