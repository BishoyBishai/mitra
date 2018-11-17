import { IStore } from "./../../../bin/store-modal";
import { create } from "./../product-actions/product-crud";
import { connect } from "react-redux";
import ProductForm from ".";
import { dismiss } from "../product-actions/product-layout";

const mapDispatchToProps = dispatch => ({
  create: product => dispatch(create(product)),
  dismiss:()=>dispatch(dismiss())
});

const mapStateToProps = (store: IStore) => ({
  message: store.products.productsState,
  productsState: store.products.productError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductForm);
