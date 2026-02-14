import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation();

  return (
    <AppPage className={classNames(``, {}, [])}>{t(`AccessForbidden`)}</AppPage>
  );
});

ForbiddenPage.displayName = `ForbiddenPage`;
