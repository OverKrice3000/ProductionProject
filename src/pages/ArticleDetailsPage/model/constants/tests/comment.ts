import type { AppComment } from "entities/comment";
import { testUser } from "entities/user/model/constants/tests/user";

export const testComment: AppComment = {
  id: `1`,
  user: testUser,
  text: `Test comment`,
};

export const testComments = [testComment];

export const testCommentsState = {
  ids: [`1`],
  entities: {
    '1': testComment,
  },
};
