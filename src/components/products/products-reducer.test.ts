import { IProductState, ISortedByEnum } from "./product-modal";
import productReducer, { initState } from "./products-reducer";
import { getReduxAction } from "../../helper/redux";
import constants from "./products-constants";

describe("product reducer", () => {
  let initialState: IProductState;
  beforeEach(() => {
    initialState = initState;
  });

  test("action success should change `productsState` property", () => {
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.PRODUCT_ACTION_SUCCESS, "pid"),
      ),
    ).toMatchObject({ ...initialState, productsState: "pid" });
  });

  test("action failed should change `productsState` and `productError` properties with error message and value", () => {
    const error = { err: "err", message: "error accrue " };
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.PRODUCT_FAILED, error),
      ),
    ).toMatchObject({
      ...initialState,
      productsState: error.message,
      productError: error.err,
    });
  });

  test("action dismiss message should return init state", () => {
    expect(
      productReducer(initialState, getReduxAction(constants.DISMISS_MESSAGE)),
    ).toMatchObject(initialState);
  });

  // TEST FILTERS

  test("search by word should change `filterByKeyWord` value ", () => {
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.CHANGE_FILTER_BY_KEY_WORD, "product"),
      ),
    ).toMatchObject({
      ...initialState,
      filters: { ...initialState.filters, filterByKeyWord: "product" },
    });
  });

  test("toggle by me should change `onlyMe` value ", () => {
    expect(
      productReducer(initialState, getReduxAction(constants.TOGGLE_ONLY_ME)),
    ).toMatchObject({
      ...initialState,
      filters: { ...initialState.filters, onlyMe: true },
    });
  });

  test("change sort by  should change `filterByKeyWord` value ", () => {
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.CHANGE_SORTED_BY, ISortedByEnum.DATE),
      ),
    ).toMatchObject({
      ...initialState,
      filters: { ...initialState.filters, sortedBy: ISortedByEnum.DATE },
    });
  });

  test("change sort direction by should change `direction` value if pass sort with same state ", () => {
    initialState = {
      ...initialState,
      filters: { ...initialState.filters, sortedBy: ISortedByEnum.DATE },
    };

    expect(
      productReducer(
        initialState,
        getReduxAction(constants.CHANGE_SORTED_BY, ISortedByEnum.DATE),
      ),
    ).toMatchObject({
      ...initialState,
      filters: {
        ...initialState.filters,
        sortedBy: ISortedByEnum.DATE,
        sortedByDirection: -1,
      },
    });
  });

  // TEST PAGINATION

  test("active page event should change `activePage` value ", () => {
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.CHANGE_ACTIVE_PAGE, 1),
      ),
    ).toMatchObject({
      ...initialState,
      activePage: 1,
    });
  });

  test("set active page with 1 if pass active page event with no value ", () => {
    expect(
      productReducer(
        initialState,
        getReduxAction(constants.CHANGE_ACTIVE_PAGE),
      ),
    ).toMatchObject({
      ...initialState,
      activePage: 1,
    });
  });


});
