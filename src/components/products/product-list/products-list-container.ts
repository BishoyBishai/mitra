import { IStore } from "./../../../bin/store-modal";
import { connect } from "react-redux";
import ProductsList from "./Products-List";
import { dismiss } from "./../product-actions/product-layout";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import config from "./../../../config/config";
import * as _ from "lodash";

const mapStateToProps = (store: IStore) => {
  const products = _.get(store, "firestore.ordered.products", []);
  return {
    products:products,
    message: store.products.productsState,
    error: store.products.productError,
  };
};

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(dismiss()),
});
export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  firestoreConnect([{ collection: config.collections.products }]),
)(ProductsList);
