import cls from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames";
import { memo } from "react";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const { t } = useTranslation(`article`);

  return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
          {t(`ArticlesPage`)}
        </div>
  );
});

ArticlesPage.displayName = `ArticlesPage`;

export default ArticlesPage;
