import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppText, TextAlign, TextTheme } from "shared/ui/appText/AppText";
import { AppInput } from "shared/ui/appInput/AppInput";
import type { Profile } from "../..";
import { Loader } from "widgets/Loader";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import type { Currency } from "entities/currency";
import { CurrencySelect } from "entities/currency";
import type { Country } from "entities/country/model/types/country";
import { CountrySelect } from "entities/country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  loadingError?: string;
  onChangeFirstname?: (firstname: string) => void;
  onChangeLastname?: (lastname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeAvatar?: (avatar: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  readOnly?: boolean;
}

export const ProfileCard = (
  {
    className,
    data,
    isLoading,
    loadingError,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
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

  if (loadingError) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <AppText theme={TextTheme.ERROR} title={t(`${loadingError}Header`)} text={t(`${loadingError}Text`)} align={TextAlign.CENTER} />
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
        <CountrySelect value={data?.country} readOnly={readOnly} onChange={onChangeCountry} className={cls.input} />
        <CurrencySelect value={data?.currency} readOnly={readOnly} onChange={onChangeCurrency} className={cls.input} />
      </div>
    </div>
  );
};
