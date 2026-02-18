import { memo } from "react";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/utils/classNames";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

import { getArticleData } from "../../model/selectors/articleSelectors";
import { ArticleAdditionalInfo } from "../ArticleAdditionalInfo/ArticleAdditionalInfo";
import cls from "./ArticleAdditionalInfoContainer.module.scss";

interface ArticleAdditionalInfoContainerProps {
  className?: string;
}

export const ArticleAdditionalInfoContainer = memo(
  ({ className }: ArticleAdditionalInfoContainerProps) => {
    const article = useSelector(getArticleData);

    if (!article) {
      return null;
    }

    return (
      <AppCard
        p={`p24`}
        border={`borderRound`}
        className={classNames(cls.ArticleAdditionalInfoContainer, {}, [
          className,
        ])}
      >
        <ArticleAdditionalInfo
          articleId={article.id}
          author={article.user}
          createdAt={article.createdAt}
          views={article.views}
        />
      </AppCard>
    );
  },
);

ArticleAdditionalInfoContainer.displayName = `ArticleAdditionalInfoContainer`;
