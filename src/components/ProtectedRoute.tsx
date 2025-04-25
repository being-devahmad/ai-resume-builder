import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
