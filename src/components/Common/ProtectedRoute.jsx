import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
