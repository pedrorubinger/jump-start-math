import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {
    component: Component,
    isPrivate = false,
    permissions = [],
    ...rest
  } = props
  const { user } = useSelector((state) => state.User);
  const isAuthenticated = !!user;

  const hasPermission = () => {
    if (!user) {
      return false;
    }

    if (permissions.includes(user.role)) {
      return true;
    }
  };

  if (isPrivate && (!isAuthenticated || !hasPermission())) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  );
};

export default ProtectedRoute;
