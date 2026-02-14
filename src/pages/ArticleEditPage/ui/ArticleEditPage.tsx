import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams();
  const isEdit = !!id;

  return (
    <AppPage className={classNames(``, {}, [className])}>
      {isEdit ? t(`ArticleEditPage`) : t(`ArticleCreatePage`)}
    </AppPage>
  );
});

ArticleEditPage.displayName = `ArticleEditPage`;

export default ArticleEditPage;
