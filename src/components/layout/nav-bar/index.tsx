import * as React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/routes";
const NavBar = () => {
  return (
    <Menu stackable>
      <Menu.Item>
        <img src="./src/assets/img/logo/logo.png" />
        <NavLink exact activeClassName="active" to={PATHS.INDEX}>
          <span>Mitra Intelligence</span>
        </NavLink>
      </Menu.Item>

      <Menu.Item name="products">
        <NavLink exact activeClassName="active" to={PATHS.PRODUCTS}>
          Products
        </NavLink>
      </Menu.Item>
      <Menu.Item name="control panel">Control Panel</Menu.Item>
      <Menu.Item name="sign-in">
        <NavLink exact activeClassName="active" to={PATHS.LOGIN}>
          Login
        </NavLink>
      </Menu.Item>
      <Menu.Item name="sign-up">
        <NavLink exact activeClassName="active" to={PATHS.SIGN_UP}>
          Sign Up
        </NavLink>
      </Menu.Item>

      <Menu.Item position="right">Log out</Menu.Item>
    </Menu>
  );
};

export default NavBar;
