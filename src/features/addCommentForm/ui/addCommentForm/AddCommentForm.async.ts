import { lazy } from "react";
import type AddCommentFormSync from "./AddCommentForm";

const AddCommentForm = lazy<typeof AddCommentFormSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./AddCommentForm`);
});

export default AddCommentForm;
