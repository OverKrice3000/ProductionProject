import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/profile/model/selectors/getProfileData/getProfileData";
import { AppText } from "shared/ui/appText/AppText";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppInput } from "shared/ui/appInput/AppInput";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation(`profile`);
  const data = useSelector(getProfileData);
  /*  const error = useSelector(getProfileError);
  const idLoading = useSelector(getProfileIsLoading); */

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <AppText title={t(`Profile`)} />
        <AppButton theme={AppButtonTheme.OUTLINE} className={cls.editButton}>{t(`Edit`)}</AppButton>
      </div>
      <div className={cls.data}>
        <AppInput value={data?.first ?? ``} placeholder={t(`FirstName`)} className={cls.input} />
        <AppInput value={data?.lastname ?? ``} placeholder={t(`LastName`)} className={cls.input} />
      </div>
    </div>
  );
};
