import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
  <Route
    {...rest}
    render={() => {
      localStorage.getItem('token') ? children : <Redirect to='/login' />;
    }}
  />
  );
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute