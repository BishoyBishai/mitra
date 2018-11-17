import * as React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import { PATHS } from "../../router/routes";
import { isAuthenticated } from "../../helper/auth";
import * as _ from "lodash";

const baseRoute = (isAuth: boolean, to: string) => {
  return props => {
    const auth = _.get(props, "firebase.auth");
    const { component: Component, ...rest } = props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuth == isAuthenticated(auth) ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: to }} />
          )
        }
      />
    );
  };
};

export const PrivateRoute = baseRoute(true, PATHS.LOGIN);

export const LoginRoute = baseRoute(false, PATHS.INDEX);
