import { useTranslation } from "react-i18next";
import { memo } from "react";
import { AppPage } from "shared/ui/appPage/ui/AppPage/AppPage";
import { classNames } from "shared/utils/classNames";

const AdminPanelPageSync = memo(() => {
  const { t } = useTranslation();

  return (
        <AppPage className={classNames(``, {}, [])}>
          {t(`AdminPanelPage`)}
        </AppPage>
  );
});

AdminPanelPageSync.displayName = `AdminPanelPage`;

export default AdminPanelPageSync;
