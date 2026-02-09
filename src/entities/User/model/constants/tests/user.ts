import { UserRole } from "../../types/user";

import type { User } from "../../types/user";

export const testUser: User = {
  id: `1`,
  username: `username`,
  avatar: `https://cdn-icons-png.flaticon.com/512/7063/7063801.png`,
  roles: [UserRole.USER],
};

export const testUserManager: User = {
  id: `1`,
  username: `username`,
  avatar: `https://cdn-icons-png.flaticon.com/512/7063/7063801.png`,
  roles: [UserRole.MANAGER],
};

export const testUserAdmin: User = {
  id: `1`,
  username: `username`,
  avatar: `https://cdn-icons-png.flaticon.com/512/7063/7063801.png`,
  roles: [UserRole.ADMIN],
};
