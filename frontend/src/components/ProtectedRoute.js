import React from "react";
import { Redirect, Route } from "react-router-dom";
import isAuthenticated from "../helper/authHelper";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/admin-login", state: { from: location } }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
