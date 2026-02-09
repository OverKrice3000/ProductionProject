import { lazy } from "react";

import type ArticleEditPageSync from "./ArticleEditPage";

const ArticleEditPage = lazy<typeof ArticleEditPageSync>(async () => await import(`./ArticleEditPage`));

export default ArticleEditPage;
