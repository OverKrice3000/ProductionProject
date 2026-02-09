import { testUser } from "@/entities/User";

import type { AppComment } from "../../index";

export const testComment: AppComment = {
  id: `1`,
  text: `Test comment`,
  user: testUser,
};

export const getTestCommentsList = (size: number) =>
  new Array(size).fill(0).map((_, index) => ({
    ...testComment,
    id: index.toString(),
  }));
