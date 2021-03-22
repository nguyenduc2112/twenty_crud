import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./Login";
import PostManagement from "./PostManagement";

const RestrictRoute = ({ path, isAuth, component: Component }) => (
  <Route
    path={path}
    render={isAuth ? <Component /> : <Redirect to="/login" />}
  />
);

const Main = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <RestrictRoute
        path="/post-management"
        component={PostManagement}
        isAuth={true}
      />
    </Switch>
  );
};

export default Main;
