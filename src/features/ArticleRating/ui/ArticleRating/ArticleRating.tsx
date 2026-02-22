import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { AppSkeleton } from "@/shared/ui/deprecated/AppSkeleton";
import { RatingCard } from "@/entities/Rating";
import { classNames } from "@/shared/utils/classNames";
import { getAuthData } from "@/entities/User";
import type { AppFlexProps } from "@/shared/ui/AppStack";

import {
  useRateArticle,
  useUserArticleRating,
} from "../../api/articleRatingApi";

export interface ArticleRatingProps extends AppFlexProps {
  className?: string;
  articleId?: string;
}

const ArticleRating = memo(
  ({ className, articleId, ...other }: ArticleRatingProps) => {
    const { t } = useTranslation(`articleDetails`);

    const authData = useSelector(getAuthData);

    const { data, isLoading } = useUserArticleRating({
      articleId: articleId ?? ``,
      userId: authData?.id ?? ``,
    });
    const [rateArticleMutation] = useRateArticle();

    const rateArticle = useCallback(
      (rate: number, feedback?: string) => {
        try {
          rateArticleMutation({
            articleId: articleId ?? ``,
            userId: authData?.id ?? ``,
            rate,
            feedback,
          });
        } catch (e) {
          console.error(e);
        }
      },
      [articleId, authData?.id, rateArticleMutation],
    );

    const onCancel = useCallback(
      (rate: number) => {
        rateArticle(rate);
      },
      [rateArticle],
    );

    const onAccept = useCallback(
      (rate: number, feedback?: string) => {
        rateArticle(rate, feedback);
      },
      [rateArticle],
    );

    if (isLoading) {
      return <AppSkeleton width={`100%`} height={120} />;
    }

    const rating = data?.[0];

    return (
      <RatingCard
        {...other}
        as={`aside`}
        onAccept={onAccept}
        onCancel={onCancel}
        selectedRating={rating?.rate}
        className={classNames(``, {}, [className])}
        title={t(`PleaseRateArticle`)}
        feedbackTitle={t(`SendFeedback`)}
        feedbackPlaceholder={t(`YourFeedback`)}
        hasRatingTitle={t(`ThankYouForYourRating`)}
        hasFeedback
      />
    );
  },
);

ArticleRating.displayName = `ArticleRating`;

export default ArticleRating;
