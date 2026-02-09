import cls from "./ErrorLayout.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { AppButton } from "@/shared/ui/AppButton";
import { useTranslation } from "react-i18next";

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
