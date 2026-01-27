import { lazy } from "react";
import type ArticleDetailsPageSync from "./ArticleDetailsPage";

const ArticleDetailsPage = lazy<typeof ArticleDetailsPageSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./ArticleDetailsPage`);
});

export default ArticleDetailsPage;
