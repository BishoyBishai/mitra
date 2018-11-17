import constants from "../products-constants";
import { getReduxAction } from "../../../helper/redux";

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
