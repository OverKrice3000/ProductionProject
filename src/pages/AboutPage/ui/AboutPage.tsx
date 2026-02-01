import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "shared/utils/classNames";
import { AppPage } from "widgets/AppPage/ui/AppPage/AppPage";

const AboutPageSync = memo(() => {
  const { t } = useTranslation(`about`);

  return (
        <AppPage className={classNames(``, {}, [])}>
          {t(`about:AboutPage`)}
        </AppPage>
  );
});

AboutPageSync.displayName = `AboutPage`;

export default AboutPageSync;
