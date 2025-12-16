import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppText, TextAlign, TextTheme } from "shared/ui/appText/AppText";
import { AppInput } from "shared/ui/appInput/AppInput";
import type { Profile } from "entities/profile";
import { Loader } from "widgets/Loader";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (firstname: string) => void;
  onChangeLastname?: (lastname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCity?: (city: string) => void;
  readOnly?: boolean;
}

export const ProfileCard = ({ className, data, isLoading, error, onChangeFirstname, onChangeLastname, onChangeAge, onChangeCity, readOnly = true }: ProfileCardProps) => {
  const { t } = useTranslation(`profile`);

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <AppText theme={TextTheme.ERROR} title={t(`${error}Header`)} text={t(`${error}Text`)} align={TextAlign.CENTER} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <AppInput value={data?.first ?? ``} placeholder={t(`FirstName`)} className={cls.input} onChange={onChangeFirstname} readOnly={readOnly} />
        <AppInput value={data?.lastname ?? ``} placeholder={t(`LastName`)} className={cls.input} onChange={onChangeLastname} readOnly={readOnly} />
        <AppInput value={data?.age ?? ``} placeholder={t(`Age`)} className={cls.input} onChange={onChangeAge} readOnly={readOnly} />
        <AppInput value={data?.city ?? ``} placeholder={t(`City`)} className={cls.input} onChange={onChangeCity} readOnly={readOnly} />
      </div>
    </div>
  );
};
