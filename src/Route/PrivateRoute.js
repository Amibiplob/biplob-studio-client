import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return <progress className="progress"></progress>;
  }
  return <Navigate to="../login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;