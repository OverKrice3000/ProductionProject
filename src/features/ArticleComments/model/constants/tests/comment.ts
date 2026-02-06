import type { AppComment } from "entities/Comment";
import { testUser } from "entities/User/model/constants/tests/user";

export const testComment: AppComment = {
  id: `1`,
  user: testUser,
  text: `Test comment`,
};

export const testComments = [testComment, { ...testComment, id: `2` }];

export const testCommentsState = {
  ids: [`1`, `2`],
  entities: {
    '1': testComments[0],
    '2': testComments[1],
  },
};
