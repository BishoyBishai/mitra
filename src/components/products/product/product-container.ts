import { IStore } from "./../../../bin/store-modal";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import config from "./../../../config/config";
import * as _ from "lodash";
import Product from "./product";

const mapStateToProps = (store: IStore, props) => {
  const id = _.get(props, "match.params.pid");
  const products= _.get(store, `firestore.data.products`);
  const product=products&&products[id]
  return {
    product: product,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: config.collections.products }]),
)(Product);
