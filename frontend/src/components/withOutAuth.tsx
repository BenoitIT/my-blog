import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
// this is a high order component which will  access to some components to some public pages
const withOuthAuthRedirect = (WrappedComponent: React.ComponentType) => {
  const AuthRedirect = (props: any) => {
    const authToken = Cookies.get("authToken");
    if (authToken) {
      return <Redirect to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthRedirect;
};

export default withOuthAuthRedirect;
