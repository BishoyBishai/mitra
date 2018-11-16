import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./layout/nav-bar";
import ProductsList from "./products/Products-List";
import Product from "./products/Product";
import { Segment } from "semantic-ui-react";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Segment basic>
          <ProductsList />
          <Product />
          <Login />
          <SignUp/>
        </Segment>
      </div>
    );
  }
}

export default App;
