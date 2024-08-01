import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
// this is a high order component which will grant authorized access to some components
const withAuthRedirect = (WrappedComponent: React.ComponentType) => {
  const AuthRedirect = (props: any) => {
    const authToken = Cookies.get("authToken");
    if (!authToken) {
      return <Redirect to="/" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
