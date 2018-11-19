import { IProductState } from "./product-modal";
import constants from "./products-constants";

export const initState: IProductState = {
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
    // action is ADD, DELETE, UPDATE product success
    case constants.PRODUCT_ACTION_SUCCESS:
      return {
        ...state,
        productError: null,
        productsState: action.payload,
      };

    // action is ADD, DELETE, UPDATE product failed
    case constants.PRODUCT_FAILED:
      return {
        ...state,
        productError: action.payload.err,
        productsState: action.payload.message,
      };

    // close notification message
    case constants.DISMISS_MESSAGE:
      return {
        ...state,
        productError: null,
        productsState: null,
      };

    // Filters
    // Change filter by word
    case constants.CHANGE_FILTER_BY_KEY_WORD: {
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByKeyWord: action.payload,
        },
      };
    }

    // Change filter by only my product
    case constants.TOGGLE_ONLY_ME: {
      return {
        ...state,
        filters: {
          ...state.filters,
          onlyMe: !state.filters.onlyMe,
        },
      };
    }

    // SORT
    // Change sort by one of options
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

    // pagination
    case constants.CHANGE_ACTIVE_PAGE: {
      return {
        ...state,
        activePage: action.payload !== null ? action.payload : 1,
      };
    }
  }
  return { ...state, productError: null };
};

export default productReducer;
