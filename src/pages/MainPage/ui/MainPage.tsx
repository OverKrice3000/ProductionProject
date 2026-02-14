import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";

const MainPageSync = memo(() => {
  const { t } = useTranslation();

  return <AppPage className={classNames(``, {}, [])}>{t(`MainPage`)}</AppPage>;
});

MainPageSync.displayName = `MainPage`;

export default MainPageSync;
