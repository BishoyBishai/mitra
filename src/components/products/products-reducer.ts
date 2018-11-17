import { IProductState } from "./product-modal";
import constants from "./products-constants";

const initState: IProductState = {
  products: [],
  productError: null,
  productsState: null,
};

const productReducer = (state = initState, action): IProductState => {
  switch (action.type) {
    case constants.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productError: null,
        productsState: " Product has been added successfully",
      };
    case constants.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productError: action.payload.err,
        productsState: action.payload.message,
      };
    case constants.DISMISS_MESSAGE:
      return {
        ...state,
        productError: null,
        productsState: null,
      };
  }
  return state;
};

export default productReducer;
