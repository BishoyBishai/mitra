import { remove } from "./../product-actions/product-crud";
import { IStore } from "./../../../bin/store-modal";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import config from "./../../../config/config";
import Product from "./product";
import { getProductById } from "../helpers";
import { edit } from "../product-actions/product-layout";

const mapStateToProps = (store: IStore, props) => {
  const product = getProductById(store, props);
  return {
    product: product,
  };
};

const mapDispatchToProps = dispatch => ({
  edit: pid => dispatch(edit(pid)),
  remove: pid => dispatch(remove(pid)),
});

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  firestoreConnect([{ collection: config.collections.products }]),
)(Product);
