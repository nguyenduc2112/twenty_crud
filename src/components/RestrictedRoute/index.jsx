import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const RestrictedRoute = ({ path, isAuth, component: Component }) => (
  <Route
    path={path}
    render={() => (isAuth ? <Component /> : <Redirect to="/login" />)}
  />
);

RestrictedRoute.propTypes = {
  path: PropTypes.string,
  isAuth: PropTypes.bool,
  component: PropTypes.node.isRequired,
};

RestrictedRoute.defaultProps = {
  path: "/",
  isAuth: false,
};

export default RestrictedRoute;
