import type { User } from "entities/user/model/types/user";

export interface UserRootSchema {
  user: UserSchema;
}

export interface UserSchema {
  authData?: User;
}
