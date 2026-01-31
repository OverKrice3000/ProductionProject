import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppPage } from "shared/ui/appPage/AppPage";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
      <AppPage className={classNames(cls.notFoundPage, {}, [className])}>
        {t(`PageNotFound`)}
      </AppPage>
  );
});

NotFoundPage.displayName = `NotFoundPage`;
