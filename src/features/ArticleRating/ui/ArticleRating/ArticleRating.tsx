import { classNames } from '@/shared/utils/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { RatingCard } from "@/entities/Rating";
import { useRateArticle, useUserArticleRating } from '../../api/articleRatingApi';
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { AppSkeleton } from "@/shared/ui/AppSkeleton/AppSkeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId?: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getAuthData);

  const { data, isLoading } = useUserArticleRating({
    articleId: articleId ?? ``,
    userId: authData?.id ?? ``,
  });
  const [rateArticleMutation] = useRateArticle();

  const rateArticle = useCallback((rate: number, feedback?: string) => {
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
  }, [articleId, authData?.id, rateArticleMutation]);

  const onCancel = useCallback((rate: number) => {
    rateArticle(rate);
  }, [rateArticle]);

  const onAccept = useCallback((rate: number, feedback?: string) => {
    rateArticle(rate, feedback);
  }, [rateArticle]);

  if (isLoading) {
    return <AppSkeleton width={`100%`} height={120} />;
  }

  const rating = data?.[0];

  return (
      <RatingCard
          onAccept={onAccept}
          onCancel={onCancel}
          selectedRating={rating?.rate}
          className={classNames(``, {}, [className])}
          title={t(`article:Rate`)}
          feedbackTitle={t(`article:SendFeedback`)}
          hasRatingTitle={t(`article:ThankYouForYourRating`)}
          hasFeedback
      />
  );
});

ArticleRating.displayName = `ArticleRating`;

export default ArticleRating;
