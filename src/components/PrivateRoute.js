import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
