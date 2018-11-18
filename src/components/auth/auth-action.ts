import { IUSer } from "./auth-modals";
import constants from "./auth-constants";
import { push } from "react-router-redux";
import { PATHS } from "../../router/routes";
import { getReduxAction } from "../../helper/redux";

export function signIn(credentials) {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    fb.auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(key => {
        dispatch(getReduxAction(constants.LOGIN_SUCCESS, key.user.uid));
        dispatch(push(PATHS.INDEX));
      })
      .catch(err => {
        dispatch(getReduxAction(constants.LOGIN_FAILED, err));
      });
  };
}
export function signUp(user: IUSer) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fb = getFirebase();
    const fs = getFirestore();
    fb.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(u => {
        dispatch(getReduxAction(constants.LOGIN_SUCCESS, u.user.uid));
        return fs
          .collection("users")
          .doc(u.user.uid)
          .set({ displayName: user.displayName });
      })
      .then(u => {
        dispatch(getReduxAction(constants.SIGN_UP_SUCCESS));
      })
      .catch(err => {
        dispatch(getReduxAction(constants.SIGN_UP_FAILED, err));
      });
  };
}

export function signOut() {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    fb.auth()
      .signOut()
      .then(() => {
        dispatch(push(PATHS.LOGIN));
      });
  };
}
