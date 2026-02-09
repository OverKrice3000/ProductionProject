import { memo } from "react";
import { useParams } from "react-router";

import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/shared/ui/AppPage";
import { AppVStack } from "@/shared/ui/AppStack";
import { ArticleRecommendations } from "@/features/ArticleRecommendations";
import { EditableArticleDetails } from "@/features/EditableArticleDetails";
import { ArticleComments } from "@/features/ArticleComments";
import { ArticleRating } from "@/features/ArticleRating";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();

  return (
        <AppPage className={classNames(``, {}, [className])}>
            <AppVStack gap={`16`} max>
                <EditableArticleDetails articleId={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendations />
                <ArticleComments articleId={id} />
            </AppVStack>
        </AppPage>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
