import { IStore } from "./../../../bin/store-modal";
import { connect } from "react-redux";
import { signOut } from "./../../auth/auth-action";
import NavBar from "./index";
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

const mapStateToProps = (state: IStore) => ({
  authState: state.firebase && state.firebase.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
