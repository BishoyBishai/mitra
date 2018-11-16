import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./layout/nav-bar";
import ProductsList from "./products/Products-List";
import Product from "./products/Product";
import { Segment } from "semantic-ui-react";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import { Switch, Route } from "react-router";
import { PATHS } from "../router/routes";
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Segment basic>
          <Switch>
            <Route exact path={PATHS.INDEX} component={ProductsList} />
            <Route path={PATHS.LOGIN} component={Login} />
            <Route path={PATHS.SIGN_UP} component={SignUp} />
            <Route exact path={PATHS.PRODUCTS} component={ProductsList} />
            <Route path={PATHS.PRODUCT()} component={Product} />
          </Switch>
        </Segment>
      </div>
    );
  }
}

export default App;
