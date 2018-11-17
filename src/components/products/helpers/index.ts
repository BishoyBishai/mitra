import * as _ from "lodash";

export const getProductById = (store, props) => {
  const id = _.get(props, "match.params.pid");
  const products = _.get(store, `firestore.data.products`);
  return products && { ...products[id], id };
};
