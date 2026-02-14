import { memo } from "react";
import { useParams } from "react-router";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";
import { AppVStack } from "@/shared/ui/AppStack";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import { EditableArticleDetails } from "@/features/EditableArticleDetails";
import { ArticleComments } from "@/features/ArticleComments";
import { ArticleRating } from "@/features/ArticleRating";
import { ToggleFeatures } from "@/shared/utils/features";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();

  return (
    <AppPage className={classNames(``, {}, [className])}>
      <AppVStack as={`article`} gap={`16`} max>
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
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
