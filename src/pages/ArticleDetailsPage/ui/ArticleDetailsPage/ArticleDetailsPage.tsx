import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { useParams } from "react-router";
import { AppPage } from "shared/ui/appPage/ui/AppPage/AppPage";
import { AppVStack } from "shared/ui/appStack";
import { ArticleRecommendations } from "features/ArticleRecommendations";
import { EditableArticleDetails } from "features/EditableArticleDetails";
import { ArticleComments } from "features/ArticleComments";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);
  const { id } = useParams();

  if (!id) {
    return <AppPage className={classNames(``, {}, [className])}>
          {t(`ArticleNotFound`)}
      </AppPage>;
  }

  return (
        <AppPage className={classNames(``, {}, [className])}>
            <AppVStack gap={`16`} max>
                <EditableArticleDetails articleId={id} />
                <ArticleRecommendations />
                <ArticleComments articleId={id} />
            </AppVStack>
        </AppPage>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
