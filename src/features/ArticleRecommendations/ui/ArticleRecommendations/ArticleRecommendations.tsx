import { useTranslation } from "react-i18next";
import { memo } from "react";

import {
  AppText as AppTextDeprecated,
  TextSize,
} from "@/shared/ui/deprecated/AppText";
import { AppVStack } from "@/shared/ui/AppStack";
import { ArticlesList } from "@/entities/Article";
import { classNames } from "@/shared/utils/classNames";
import type { AppFlexProps } from "@/shared/ui/AppStack";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppText } from "@/shared/ui/redesigned/AppText";

import { useArticleRecommendations } from "../../api/articleRecommendationsApi";
import { articleRecommendationsFetchLimit } from "../../lib/constants/recommendations";

interface ArticleRecommendationsProps extends AppFlexProps {
  className?: string;
}

export const ArticleRecommendations = memo(
  ({ className, ...other }: ArticleRecommendationsProps) => {
    const { t } = useTranslation(`articleDetails`);

    const { data, isLoading } = useArticleRecommendations(
      articleRecommendationsFetchLimit,
    );

    return (
      <AppVStack
        {...other}
        gap={`8`}
        className={classNames(``, {}, [className])}
      >
        <ToggleFeatures
          name={`isAppRedesigned`}
          on={<AppText size={TextSize.L} title={t(`Recommendations`)} />}
          off={
            <AppTextDeprecated size={TextSize.L} title={t(`Recommendations`)} />
          }
        />

        <ArticlesList articles={data} isLoading={isLoading} />
      </AppVStack>
    );
  },
);

ArticleRecommendations.displayName = `ArticleRecommendations`;
