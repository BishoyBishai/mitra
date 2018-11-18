import constants from "./auth-constants";
import { IAuthState } from "./auth-modals";

const authInitState: IAuthState = {
  authError: null,
  uid: null,
};

const authReducer = (state: IAuthState = authInitState, action): IAuthState => {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        uid: action.payload,
        authError: null,
      };
    case constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case constants.LOGIN_FAILED:
    case constants.SIGN_UP_FAILED:
      return {
        ...state,
        authError: action.payload,
      };
  }
  return state;
};

export default authReducer;
