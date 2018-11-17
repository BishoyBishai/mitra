import { IProductState } from "./product-modal";
import constants from "./products-constants";

const dummy = [
  {
    id: "1111",
    title: "test 1",
    description:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    price: 50,
    image: "",
    date_created: "test",
    uid: "aassaas",
  },
];

const initState: IProductState = {
  products: dummy,
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
  return {
    ...state,
    productError: null,
    productsState: null,
  };
};

export default productReducer;
