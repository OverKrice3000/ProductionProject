import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppPage } from "@/widgets/AppPage";
import { classNames } from "@/shared/utils/classNames";

const AboutPageSync = memo(() => {
  const { t } = useTranslation(`about`);

  return <AppPage className={classNames(``, {}, [])}>{t(`AboutPage`)}</AppPage>;
});

AboutPageSync.displayName = `AboutPage`;

export default AboutPageSync;
