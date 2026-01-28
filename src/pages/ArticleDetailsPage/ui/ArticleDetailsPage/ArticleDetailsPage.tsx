import cls from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation(`article`);

  const { id } = useParams();

  if (!id) {
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          {t(`ArticleNotFound`)}
      </div>;
  }

  return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails articleId={id} />
        </div>
  );
});

ArticleDetailsPage.displayName = `ArticleDetailsPage`;

export default ArticleDetailsPage;
