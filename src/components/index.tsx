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
import { PrivateRoute, LoginRoute } from "./common/authRoute";
import { connect } from "react-redux";
import { IStore } from "../bin/store-modal";
import ProductForm from "./products/product-form/product-form-container";
class App extends React.Component<{ firebase }> {
  render() {
    const { firebase } = this.props;
    return (
      <div>
        <NavBar />
        <Segment basic>
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
            <PrivateRoute
              firebase={firebase}
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
      </div>
    );
  }
}
const mapStateToProps = (state: IStore) => ({
  firebase: state.firebase,
});
export default connect(mapStateToProps)(App);
