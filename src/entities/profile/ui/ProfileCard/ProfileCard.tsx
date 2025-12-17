import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppText, TextAlign, TextTheme } from "shared/ui/appText/AppText";
import { AppInput } from "shared/ui/appInput/AppInput";
import type { Profile } from "entities/profile";
import { Loader } from "widgets/Loader";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstname?: (firstname: string) => void;
  onChangeLastname?: (lastname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeAvatar?: (avatar: string) => void;
  readOnly?: boolean;
}

export const ProfileCard = (
  {
    className,
    data,
    isLoading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    readOnly = true,
  }: ProfileCardProps) => {
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
    <div className={classNames(cls.ProfileCard, { [cls.edit]: !readOnly }, [className])}>
      <div className={cls.data}>
        { data?.avatar &&
            <div className={cls.avatarWrapper}>
              <AppAvatar size={64} src={data?.avatar} />
            </div>
        }
        <AppInput value={data?.first ?? ``} placeholder={t(`FirstName`)} className={cls.input} onChange={onChangeFirstname} readOnly={readOnly} />
        <AppInput value={data?.lastname ?? ``} placeholder={t(`LastName`)} className={cls.input} onChange={onChangeLastname} readOnly={readOnly} />
        <AppInput value={data?.age ?? ``} placeholder={t(`Age`)} className={cls.input} onChange={onChangeAge} readOnly={readOnly} />
        <AppInput value={data?.city ?? ``} placeholder={t(`City`)} className={cls.input} onChange={onChangeCity} readOnly={readOnly} />
        <AppInput value={data?.username ?? ``} placeholder={t(`Username`)} className={cls.input} onChange={onChangeUsername} readOnly={readOnly} />
        <AppInput value={data?.avatar ?? ``} placeholder={t(`AvatarLink`)} className={cls.input} onChange={onChangeAvatar} readOnly={readOnly} />
      </div>
    </div>
  );
};
