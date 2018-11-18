import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./layout/nav-bar/nav-bar-container";
import ProductsList from "./products/product-list/products-list-container";
import Product from "./products/product/product-container";
import { Segment } from "semantic-ui-react";
import Login from "./auth/Login/login-container";
import SignUp from "./auth/signup/singup-container";
import { Switch, Route } from "react-router";
import { PATHS } from "../router/routes";
import { PrivateRoute, LoginRoute, AuthorizedRoute } from "./common/authRoute";
import { connect } from "react-redux";
import { IStore } from "../bin/store-modal";
import ProductForm from "./products/product-form/product-form-container";
import Footer from "./layout/footer/loader";
import "./style.scss";
class App extends React.Component<{ firebase; firestore }> {
  render() {
    const { firebase, firestore } = this.props;
    return (
      <div>
        <NavBar />
        <Segment className="app-body" basic>
          <Switch>
            <PrivateRoute
              firebase={firebase}
              exact
              path={PATHS.INDEX}
              component={ProductsList}
            />
            <LoginRoute
              firebase={firebase}
              path={PATHS.LOGIN}
              component={Login}
            />
            <LoginRoute
              firebase={firebase}
              path={PATHS.SIGN_UP}
              component={SignUp}
            />
            <PrivateRoute
              firebase={firebase}
              exact
              path={PATHS.PRODUCTS}
              component={ProductsList}
            />
            <PrivateRoute
              firebase={firebase}
              exact
              path={PATHS.CREATE_PRODUCT}
              component={ProductForm}
            />
            <AuthorizedRoute
              firebase={firebase}
              firestore={firestore}
              path={PATHS.EDIT_PRODUCT()}
              component={ProductForm}
            />
            <PrivateRoute
              firebase={firebase}
              path={PATHS.PRODUCT()}
              component={Product}
            />
          </Switch>
        </Segment>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state: IStore) => ({
  firebase: state.firebase,
  firestore: state.firestore,
});
export default connect(mapStateToProps)(App);
