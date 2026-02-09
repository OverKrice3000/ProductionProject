import { lazy } from "react";

import type ArticleDetailsPageSync from "./ArticleDetailsPage";

const ArticleDetailsPage = lazy<typeof ArticleDetailsPageSync>(
  async () => await import(`./ArticleDetailsPage`),
);

export default ArticleDetailsPage;
