import { memo } from "react";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";
import {
  ArticleInfiniteList,
  ArticlesPageFilters,
  useFetchNextArticlesPage,
} from "@/features/ArticleInfiniteList";
import { ArticlePageGreeting } from "@/widgets/ArticlePageGreeting";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const onLoadNextPart = useFetchNextArticlesPage();

  return (
    <AppPage
      gap={`16`}
      className={classNames(``, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <ArticlesPageFilters />
      <ArticleInfiniteList />
      <ArticlePageGreeting />
    </AppPage>
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
