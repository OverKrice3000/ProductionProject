import { getAuthData } from "entities/user";
import { Navigate, useLocation } from "react-router";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const auth = useSelector(getAuthData);

  if (!auth) {
    return <Navigate to="/" state={{ from: location }}></Navigate>;
  }

  return <>{children}</>;
};
