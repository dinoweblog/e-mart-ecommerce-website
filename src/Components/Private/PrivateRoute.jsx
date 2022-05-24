import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated === "true" ? children : <Navigate to="/user/login" />;
};
