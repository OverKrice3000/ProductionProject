import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";
import { AppPage } from "widgets/AppPage";
import { useParams } from "react-router";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams();
  const isEdit = !!id;

  return (
        <AppPage className={classNames(``, {}, [className])}>
          { isEdit ? t(`ArticleEditPage`) : t(`ArticleCreatePage`)}
        </AppPage>
  );
});

ArticleEditPage.displayName = `ArticleEditPage`;

export default ArticleEditPage;
