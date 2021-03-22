import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Login from "./Login";
import PostManagement from "./PostManagement";
import RestrictedRoute from "../components/RestrictedRoute";

import AuthContext from "../context/authContext";
import { isValidUser } from "../services";

const Main = () => {
  const [authInfo, setAuthInfo] = useState({
    isAuth: false,
    username: "",
  });
  const history = useHistory();

  const handleLogin = (username, password) => {
    if (isValidUser(username, password)) {
      setAuthInfo({ isAuth: true, username });
      history.push("/post-management");
    } else alert("User not found!!");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: authInfo.isAuth,
        onLogin: handleLogin,
        username: authInfo.username,
      }}
    >
      <Switch>
        <Route path="/login" component={Login} />
        <RestrictedRoute
          path="/post-management"
          component={PostManagement}
          isAuth={authInfo.isAuth}
        />
        <RestrictedRoute
          path="/"
          component={PostManagement}
          isAuth={authInfo.isAuth}
        />
      </Switch>
    </AuthContext.Provider>
  );
};

export default Main;
