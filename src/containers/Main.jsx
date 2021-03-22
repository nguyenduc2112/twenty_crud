import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login";

const Main = () => {
  console.log(" Go to main");
  return <Login />;
};

export default Main;
