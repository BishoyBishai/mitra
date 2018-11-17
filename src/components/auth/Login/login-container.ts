import { connect } from "react-redux";
import Login from "./login";
import { signIn } from "./../auth-action";
import { ICredentials } from "../auth-modals";
import { IStore } from "../../../bin/store-modal";
const mapDispatchToProps = dispatch => ({
  login: (credentials: ICredentials) => dispatch(signIn(credentials)),
});

const mapStateToProps = (state: IStore) => ({
  authError: state.auth.authError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
