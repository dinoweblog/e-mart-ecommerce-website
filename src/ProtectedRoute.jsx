import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.login);

  return user ? children : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
