import { filterProduct } from "./../helpers/filterProduct";
import { IStore } from "./../../../bin/store-modal";
import { connect } from "react-redux";
import ProductsList from "./Products-List";
import { dismiss, paginate } from "./../product-actions/product-layout";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import config from "./../../../config/config";
import * as _ from "lodash";

const mapStateToProps = (store: IStore) => {
  const products = _.get(store, "firestore.ordered.products", []);
  const uid = _.get(store, "firebase.auth.uid");
  const fillers = store.products.filters;
  const filteredProduct = filterProduct(products, fillers, uid);
  const productsPerPage = config.productsPerPage;
  const totalPages = Math.ceil(filteredProduct.length / productsPerPage);
  let activePage = store.products.activePage;
  activePage = activePage > totalPages ? totalPages : activePage;

  return {
    products: filteredProduct.slice(
      (activePage - 1) * productsPerPage,
      activePage * productsPerPage,
    ),
    message: store.products.productsState,
    error: store.products.productError,
    isPaginatedPage: filteredProduct.length > productsPerPage,
    totalPages: totalPages,
    activePage,
  };
};

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(dismiss()),
  paginate: p => dispatch(paginate(p)),
});
export default compose<any>(
  firestoreConnect([{ collection: config.collections.products }]),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ProductsList);
