import { connect } from "react-redux";
import { signUp } from "./../auth-action";
import { IUSer } from "../auth-modals";
import { IStore } from "../../../bin/store-modal";
import SignUp from "./signup";
const mapDispatchToProps = dispatch => ({
  signup: (user: IUSer) => dispatch(signUp(user)),
});

const mapStateToProps = (state: IStore) => ({
  authError: state.auth.authError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
