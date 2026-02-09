import { useTranslation } from "react-i18next";
import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/shared/ui/AppPage";

import cls from "./NotFoundPage.module.scss";

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
