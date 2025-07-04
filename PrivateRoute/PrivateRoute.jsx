import {  useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};
export default PrivateRoute;
