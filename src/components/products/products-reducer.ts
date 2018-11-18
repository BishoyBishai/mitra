import { IProductState } from "./product-modal";
import constants from "./products-constants";

const initState: IProductState = {
  products: [],
  productError: null,
  productsState: null,
  filters: {
    onlyMe: false,
    sortedBy: null,
    sortedByDirection: 1,
    filterByKeyWord: null,
  },
  activePage: 1,
};

const productReducer = (state = initState, action): IProductState => {
  switch (action.type) {
    case constants.PRODUCT_ACTION_SUCCESS:
      return {
        ...state,
        productError: null,
        productsState: action.payload,
      };

    case constants.PRODUCT_FAILED:
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
    case constants.CHANGE_FILTER_BY_KEY_WORD: {
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByKeyWord: action.payload,
        },
      };
    }
    case constants.TOGGLE_ONLY_ME: {
      return {
        ...state,
        filters: {
          ...state.filters,
          onlyMe: !state.filters.onlyMe,
        },
      };
    }
    case constants.CHANGE_SORTED_BY: {
      const sortedByDirection = state.filters.sortedByDirection;
      return {
        ...state,
        filters: {
          ...state.filters,
          sortedBy: action.payload,
          sortedByDirection:
            action.payload === state.filters.sortedBy
              ? -1 * sortedByDirection
              : sortedByDirection,
        },
      };
    }
    case constants.CHANGE_ACTIVE_PAGE: {
      return {
        ...state,
        activePage: action.payload,
      };
    }
  }
  return { ...state, productError: null };
};

export default productReducer;
