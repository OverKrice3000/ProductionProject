import type { AppComment } from "entities/comment";
import { testUser } from "entities/user/model/constants/tests/user";

export const testComment: AppComment = {
  id: `1`,
  text: `Test comment`,
  user: testUser,
};
