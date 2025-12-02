import React from 'react';
import { useTranslation } from "react-i18next";
import cls from "./AboutPage.module.scss";

const AboutPage = () => {
  const { t } = useTranslation(`about`);

  return (
        <div className={cls.aboutPage}>
          {t(`about:AboutPage`)}
        </div>
  );
};

export default AboutPage;
