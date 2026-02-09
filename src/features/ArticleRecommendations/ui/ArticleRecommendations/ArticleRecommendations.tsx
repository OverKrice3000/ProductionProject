import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppText, TextSize } from "@/shared/ui/AppText";
import { ArticlesList } from "@/entities/Article";
import { AppVStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";

import { useArticleRecommendations } from "../../api/articleRecommendationsApi";
import { articleRecommendationsFetchLimit } from "../../lib/constants/recommendations";

interface ArticleRecommendationsProps {
  className?: string;
}

export const ArticleRecommendations = memo(
  (props: ArticleRecommendationsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data, isLoading } = useArticleRecommendations(
      articleRecommendationsFetchLimit,
    );

    return (
      <AppVStack gap={`8`} className={classNames(``, {}, [className])}>
        <AppText size={TextSize.L} title={t(`Recommendations`)} />
        <ArticlesList articles={data} isLoading={isLoading} />
      </AppVStack>
    );
  },
);

ArticleRecommendations.displayName = `ArticleRecommendations`;
