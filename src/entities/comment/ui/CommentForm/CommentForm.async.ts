import { lazy } from "react";
import type AddCommentFormSync from "./CommentForm";

const AddCommentForm = lazy<typeof AddCommentFormSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./CommentForm`);
});

export default AddCommentForm;
