import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/shared/ui/AppPage";
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
