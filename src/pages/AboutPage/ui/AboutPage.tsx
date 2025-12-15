import { useTranslation } from "react-i18next";
import cls from "./AboutPage.module.scss";
import { memo } from "react";

const AboutPageSync = memo(() => {
  const { t } = useTranslation(`about`);

  return (
        <div className={cls.aboutPage}>
          {t(`about:AboutPage`)}
        </div>
  );
});

AboutPageSync.displayName = `AboutPage`;

export default AboutPageSync;
