import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("access");

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
