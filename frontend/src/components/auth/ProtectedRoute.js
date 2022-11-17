import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile"))?.user
  );
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        if (roles && roles.indexOf(user?.userType) === -1) {
          return <Redirect to={{ pathname: "/" }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};
