import type { User } from "./user";

export interface UserRootSchema {
  user: UserSchema;
}

export interface UserSchema {
  authData?: User;
}
