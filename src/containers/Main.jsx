import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Login from "./Login";
import PostManagement from "./PostManagement";

import AuthContext from "../context/authContext";
import { isValidUser } from "../services";

const RestrictRoute = ({ path, isAuth, component: Component }) => (
  <Route
    path={path}
    render={() => (isAuth ? <Component /> : <Redirect to="/login" />)}
  />
);

const Main = () => {
  const [isAuth, setAuth] = useState(false);
  const history = useHistory();

  const handleLogin = (username, password) => {
    if (isValidUser(username, password)) {
      setAuth(true);
      history.push("/post-management");
    } else alert("User not found!!");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        onLogin: handleLogin,
      }}
    >
      <Switch>
        <Route path="/login" component={Login} />
        <RestrictRoute
          path="/post-management"
          component={PostManagement}
          isAuth={isAuth}
        />
      </Switch>
    </AuthContext.Provider>
  );
};

export default Main;
