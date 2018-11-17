import constants from "../products-constants";

export const dismiss = () => {
  return dispatch => {
    dispatch({ type: constants.DISMISS_MESSAGE });
  };
};
