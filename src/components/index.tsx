import * as React from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <img src="./src/assets/img/logo/logo.png" />{" "}
          <span>Mitra Intelligence</span>
        </Menu.Item>

        <Menu.Item name="products">Products</Menu.Item>
        <Menu.Item name="control panel">Control Panel</Menu.Item>
        <Menu.Item name="sign-in">Sign-in</Menu.Item>
        <Menu.Item name="sign-up">Sign-up</Menu.Item>

        <Menu.Item position="right">
          Log out
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
