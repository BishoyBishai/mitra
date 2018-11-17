import { IUSer } from "./auth-modals";
import constants from "./auth-constants";
import { push } from "react-router-redux";
import { PATHS } from "../../router/routes";

export function signIn(credentials) {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase();
    fb.auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(key => {
        dispatch({ type: constants.LOGIN_SUCCESS });
        dispatch(push(PATHS.INDEX));
      })
      .catch(err => {
        dispatch({ type: constants.LOGIN_FAILED, payload: err });
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
        console.log(u);
        return fs
          .collection("users")
          .doc(u.user.uid)
          .set({ displayName: user.displayName });
      })
      .then(() => {
        dispatch({ type: constants.SIGN_UP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: constants.SIGN_UP_FAILED, payload: err });
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
