import { memo } from "react";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";
import {
  ArticleInfiniteList,
  ArticlesPageFilters,
  useFetchNextArticlesPage,
  ViewSelectorContainer,
  ArticlesFilters,
} from "@/features/ArticleInfiniteList";
import { ArticlePageGreeting } from "@/widgets/ArticlePageGreeting";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { StickyLayout } from "@/shared/layouts/StickyLayout/StickyLayout";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const onLoadNextPart = useFetchNextArticlesPage();

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <StickyLayout
          left={<ViewSelectorContainer />}
          content={
            <AppPage
              gap={`16`}
              className={classNames(``, {}, [className])}
              onScrollEnd={onLoadNextPart}
            >
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </AppPage>
          }
          right={<ArticlesFilters />}
        />
      }
      off={
        <AppPage
          gap={`16`}
          className={classNames(``, {}, [className])}
          onScrollEnd={onLoadNextPart}
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList />
          <ArticlePageGreeting />
        </AppPage>
      }
    />
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
