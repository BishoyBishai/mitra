import * as React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/routes";
import { isAuthenticated } from "../../../helper/auth";
const NavBar = props => {
  const authState = isAuthenticated(props.authState);
  return (
    <Menu stackable>
      <Menu.Item>
        <img src="./src/assets/img/logo/logo.png" />
        <NavLink exact activeClassName="active" to={PATHS.INDEX}>
          <span>Mitra Intelligence</span>
        </NavLink>
      </Menu.Item>
      {authState && (
        <Menu.Menu>
          <Menu.Item name="sign-in">
            <NavLink exact activeClassName="active" to={PATHS.PRODUCTS}>
              Products
            </NavLink>
          </Menu.Item>
        </Menu.Menu>
      )}
      {authState ? (
        <Menu.Menu position="right">
          <Dropdown item text={props.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <a onClick={props.signOut}>Log out</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
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
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default NavBar;
