import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Logout, View, ...rest }) {
  return (
  <Route
    {...rest}
    render={(props) => {
      localStorage.getItem('token') ? <View {...props}/> : <Redirect to='/login' />;
      localStorage.getItem('token') ? <Logout {...props}/> : <Redirect to='/login' />;

    }}
  />
  );
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute