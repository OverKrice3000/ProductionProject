import { lazy } from "react";
import type ArticleEditPageSync from "./ArticleEditPage";

const ArticleEditPage = lazy<typeof ArticleEditPageSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./ArticleEditPage`);
});

export default ArticleEditPage;
