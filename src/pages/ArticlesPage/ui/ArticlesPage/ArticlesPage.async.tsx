import { lazy } from "react";
import type ArticlesPageSync from "./ArticlesPage";

const ArticlesPage = lazy<typeof ArticlesPageSync>(async () => await import(`./ArticlesPage`));

export default ArticlesPage;
