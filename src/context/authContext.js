import React from "react";

const authContext = React.createContext({
  isAuth: false,
  onLogin: () => {},
  username: "",
});

export default authContext;
