import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/shared/ui/appPage/ui/AppPage/AppPage";

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation();

  return (
        <AppPage className={classNames(``, {}, [])}>
          {t(`AccessForbidden`)}
        </AppPage>
  );
});

ForbiddenPage.displayName = `ForbiddenPage`;
