import { PATHS } from "./../../../router/routes";
import constants from "../products-constants";
import { getReduxAction } from "../../../helper/redux";
import { push } from "react-router-redux";

export const dismiss = () => {
  return dispatch => {
    dispatch(getReduxAction(constants.DISMISS_MESSAGE));
  };
};
export const changeFilterBy = value => {
  return dispatch => {
    dispatch(getReduxAction(constants.CHANGE_FILTER_BY_KEY_WORD, value));
  };
};
export const toggleOnlyMe = () => {
  return dispatch => {
    dispatch(getReduxAction(constants.TOGGLE_ONLY_ME));
  };
};
export const changeSortedBy = key => {
  return dispatch => {
    dispatch(getReduxAction(constants.CHANGE_SORTED_BY, key));
  };
};

export const paginate = page => {
  return dispatch => {
    dispatch(push({ pathname: PATHS.PRODUCTS, search: `page=${page}` }));
    dispatch(getReduxAction(constants.CHANGE_ACTIVE_PAGE, page));
  };
};

export const edit = uid => {
  return dispatch => {
    dispatch(push({ pathname: PATHS.EDIT_PRODUCT(uid) }));
  };
};
