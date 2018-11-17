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
          <Dropdown item text="Products">
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink exact activeClassName="active" to={PATHS.PRODUCTS}>
                  List All
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink exact activeClassName="active" to={PATHS.MY_PRODUCTS}>
                  My Product
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink exact activeClassName="active" to={PATHS.PRODUCTS}>
                  Add New
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name="control panel">Control Panel</Menu.Item>
        </Menu.Menu>
      )}
      {authState ? (
        <Menu.Menu position="right">
          <Menu.Item position="right">
            <a onClick={props.signOut}>Log out</a>
          </Menu.Item>
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
