import * as _ from "lodash";

export const isAuthenticated = auth => {
  return !_.get(auth, "isEmpty", true);
};
export const isAuthorized = props => {
  const productId = _.get(props, "computedMatch.params.pid");
  const currentUId = _.get(props, "firebase.auth.uid");
  const products = _.get(props, "firestore.data.products");
  const productUId =
    products && products[productId] && products[productId]["uid"];

  return currentUId === productUId;
};
