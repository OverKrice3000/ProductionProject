import { lazy, Suspense } from "react";

import type { CommentFormProps } from "./CommentForm";
import type CommentFormSync from "./CommentForm";

const CommentFormLazy = lazy<typeof CommentFormSync>(
  async () => await import(`./CommentForm`),
);

const CommentForm = (props: CommentFormProps) => {
  return (
    <Suspense fallback={``}>
      <CommentFormLazy {...props} />
    </Suspense>
  );
};

export default CommentForm;
