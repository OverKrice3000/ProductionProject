import { useTranslation } from "react-i18next";
import cls from "./MainPage.module.scss";

const MainPageSync = () => {
  const { t } = useTranslation();

  return (
        <div className={cls.mainPage}>
          {t(`MainPage`)}
        </div>
  );
};

export default MainPageSync;
