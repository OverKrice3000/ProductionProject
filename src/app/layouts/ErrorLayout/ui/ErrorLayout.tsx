import { useTranslation } from "react-i18next";

import { AppButton } from "@/shared/ui/deprecated/AppButton";
import { classNames } from "@/shared/utils/classNames";

import cls from "./ErrorLayout.module.scss";

export const ErrorLayout = () => {
  const { t } = useTranslation();

  const onRefreshPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.errorLayout, {}, [])}>
      <span>{t(`Unexpected Error Happened`)}</span>
      <AppButton onClick={onRefreshPage}>{t(`Refresh Page`)}</AppButton>
    </div>
  );
};
