import React from "react";

const authContext = React.createContext({
  isAuth: false,
  onLogin: () => {},
});

export default authContext;
