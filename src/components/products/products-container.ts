import { IStore } from "../../bin/store-modal";
import { connect } from "react-redux";
import ProductsList from "./Products-List";

const stateMapToProps = (store: IStore) => {
  return {
    products: store.products.products,
  };
};

const stateDispatchToProps = dispatch => {};

export default connect(
  stateMapToProps,
  null,
)(ProductsList);
