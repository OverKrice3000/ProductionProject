import { useTranslation } from "react-i18next";
import cls from "./MainPage.module.scss";
import { memo } from "react";

const MainPageSync = memo(() => {
  const { t } = useTranslation();

  return (
        <div className={cls.mainPage}>
          {t(`MainPage`)}
        </div>
  );
});

MainPageSync.displayName = `MainPage`;

export default MainPageSync;
