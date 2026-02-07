import { lazy } from "react";
import type CommentFormSync from "./CommentForm";

const CommentForm = lazy<typeof CommentFormSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./CommentForm`);
});

export default CommentForm;
