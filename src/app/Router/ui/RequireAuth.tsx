import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

import type { UserRole } from "@/entities/User";
import { getAuthData, getUserRoles } from "@/entities/User";
import { RoutePath } from "@/shared/constants/router";

import type { ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode;
  requiredRoles?: UserRole[];
}

export const RequireAuth = ({ children, requiredRoles }: RequireAuthProps) => {
  const location = useLocation();
  const auth = useSelector(getAuthData);
  const userRoles = useSelector(getUserRoles);

  const correctUserRoles = !requiredRoles || requiredRoles.some((requiredRole) => userRoles.includes(requiredRole));

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }}></Navigate>;
  }

  if (!correctUserRoles) {
    return <Navigate to={RoutePath.forbidden_page} state={{ from: location }}></Navigate>;
  }

  return <>{children}</>;
};
