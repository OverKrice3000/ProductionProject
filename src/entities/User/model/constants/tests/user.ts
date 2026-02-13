import avatarImage from "@/shared/assets/tests/avatar.jpeg";

import { UserRole } from "../../types/user";

import type { User } from "../../types/user";

export const testUser: User = {
  id: `1`,
  username: `username`,
  avatar: avatarImage,
  roles: [UserRole.USER],
};

export const testUserManager: User = {
  id: `1`,
  username: `username`,
  avatar: avatarImage,
  roles: [UserRole.MANAGER],
};

export const testUserAdmin: User = {
  id: `1`,
  username: `username`,
  avatar: avatarImage,
  roles: [UserRole.ADMIN],
};

export const testUserJsonSettings: User = {
  id: `1`,
  username: `username`,
  avatar: avatarImage,
  roles: [UserRole.USER],
  jsonSettings: {
    articlesPageHasBeenOpened: true,
  },
};
