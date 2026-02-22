import { useTranslation } from "react-i18next";

import { AppButton } from "@/shared/ui/deprecated/AppButton";
import { classNames } from "@/shared/utils/classNames";

import cls from "./ErrorLayout.module.scss";

export const ErrorLayout = () => {
  const { t } = useTranslation(`error`);

  const onRefreshPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.errorLayout, {}, [])}>
      <span>{t(`error:UnexpectedErrorHappened`)}</span>
      <AppButton onClick={onRefreshPage}>{t(`error:RefreshPage`)}</AppButton>
    </div>
  );
};
