import { memo } from "react";
import { useParams } from "react-router";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppVStack } from "@/shared/ui/AppStack";
import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import {
  ArticleAdditionalInfoContainer,
  EditableArticleDetails,
} from "@/features/EditableArticleDetails";
import { ArticleComments } from "@/features/ArticleComments";
import { ArticleRating } from "@/features/ArticleRating";
import { StickyLayout } from "@/shared/layouts/StickyLayout/StickyLayout";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <StickyLayout
          content={
            <AppPage className={classNames(``, {}, [className])}>
              <AppVStack as={`article`} gap={`16`} maxW>
                <EditableArticleDetails articleId={id} />
                <ToggleFeatures
                  name={`isArticleRatingEnabled`}
                  on={<ArticleRating as={`aside`} articleId={id} />}
                  off={<></>}
                />
                <ArticleRecommendations as={`aside`} />
                <ArticleComments as={`section`} articleId={id} />
              </AppVStack>
            </AppPage>
          }
          right={<ArticleAdditionalInfoContainer />}
        />
      }
      off={
        <AppPage className={classNames(``, {}, [className])}>
          <AppVStack as={`article`} gap={`16`} maxW>
            <EditableArticleDetails articleId={id} />
            <ToggleFeatures
              name={`isArticleRatingEnabled`}
              on={<ArticleRating as={`aside`} articleId={id} />}
              off={<></>}
            />
            <ArticleRecommendations as={`aside`} />
            <ArticleComments as={`section`} articleId={id} />
          </AppVStack>
        </AppPage>
      }
    />
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
