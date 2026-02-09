import { createSelector } from "@reduxjs/toolkit";

import { UserRole } from "../../types/user";

import type { UserRootSchema } from "../../types/userSchema";

export const getUserRoles = (state: UserRootSchema) =>
  state.user.authData?.roles ?? [];
export const isUserAdmin = createSelector(getUserRoles, (roles: UserRole[]) =>
  roles.includes(UserRole.ADMIN),
);
export const isUserManager = createSelector(getUserRoles, (roles: UserRole[]) =>
  roles.includes(UserRole.MANAGER),
);
