import type { AppComment } from "../../..";
import { testUser } from "entities/User/model/constants/tests/user";

export const testComment: AppComment = {
  id: `1`,
  text: `Test comment`,
  user: testUser,
};
