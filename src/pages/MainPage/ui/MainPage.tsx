import React from 'react';
import { useTranslation } from "react-i18next";
import cls from "./MainPage.module.scss";
import { Counter } from "entities/counter";

const MainPage = () => {
  const { t } = useTranslation();

  return (
        <div className={cls.mainPage}>
          {t(`MainPage`)}
          <Counter />
        </div>
  );
};

export default MainPage;
