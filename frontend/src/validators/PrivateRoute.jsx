import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("access");

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" replace />;
}