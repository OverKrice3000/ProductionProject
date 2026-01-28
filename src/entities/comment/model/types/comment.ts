import type { User } from "entities/user";

export interface AppComment {
  id: string;
  user: User;
  text: string;
}
