import { memo } from "react";
import { useTranslation } from "react-i18next";

import {
  AppText as AppTextDeprecated,
  TextSize,
} from "@/shared/ui/deprecated/AppText";
import { classNames } from "@/shared/utils/classNames";
import type { AppBlockProps } from "@/shared/ui/AppBlock/AppBlock";
import { AppBlock } from "@/shared/ui/AppBlock/AppBlock";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppHStack } from "@/shared/ui/AppStack";

import cls from "./ArticleList.module.scss";
import { ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import type { Article } from "../../model/types/article";

interface ArticleListProps extends AppBlockProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));
};

export const ArticlesList = memo(
  ({
    className,
    articles,
    view = ArticleView.PLATE,
    isLoading,
    ...other
  }: ArticleListProps) => {
    const { t } = useTranslation(`articles`);

    const renderArticle = (article: Article) => (
      <ArticleListItem
        article={article}
        key={article.id}
        view={view}
        className={cls.card}
      />
    );

    if (!isLoading && !articles?.length) {
      return (
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={
            <div
              className={classNames(cls.ArticleList, {}, [
                className,
                cls[view],
              ])}
            >
              <AppText size={TextSize.L} title={t(`ArticlesNotFound`)} />
            </div>
          }
          off={
            <div
              className={classNames(cls.ArticleList, {}, [
                className,
                cls[view],
              ])}
            >
              <AppTextDeprecated
                size={TextSize.L}
                title={t(`ArticlesNotFound`)}
              />
            </div>
          }
        />
      );
    }

    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppHStack
            justifyContent={`around`}
            wrap={`wrap`}
            gap={`16`}
            className={classNames(``, {}, [className, cls[view]])}
            {...other}
          >
            {articles && articles.length > 0
              ? articles.map(renderArticle)
              : null}
            {isLoading && getSkeletons(view)}
          </AppHStack>
        }
        off={
          <AppBlock
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            {...other}
          >
            {articles && articles.length > 0
              ? articles.map(renderArticle)
              : null}
            {isLoading && getSkeletons(view)}
          </AppBlock>
        }
      />
    );
  },
);

ArticlesList.displayName = `ArticleList`;
