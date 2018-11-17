import { IStore } from "../../bin/store-modal";
import { connect } from "react-redux";
import ProductsList from "./Products-List";

const mapStateToProps = (store: IStore) => {
  return {
    products: store.products.products,
    message: store.products.productsState,
    error: store.products.productError,
  };
};


export default connect(
  mapStateToProps,
  null,
)(ProductsList);
