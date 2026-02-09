import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppText, TextAlign, TextTheme } from "@/shared/ui/AppText";
import { AppInput } from "@/shared/ui/AppInput";
import type { Profile } from "../..";
import { AppAvatar } from "@/shared/ui/AppAvatar";
import type { Currency } from "@/entities/Currency";
import { CurrencySelect } from "@/entities/Currency";
import type { Country } from '@/entities/Country';
import { CountrySelect } from "@/entities/Country";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { AppLoader } from "@/shared/ui/AppLoader";

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
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <AppHStack max justifyContent={`center`} className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <AppLoader />
      </AppHStack>
    );
  }

  if (loadingError) {
    return (
      <AppHStack justifyContent={`center`} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <AppText theme={TextTheme.ERROR} title={t(`profile:${loadingError}Header`)} text={t(`profile:${loadingError}Text`)} align={TextAlign.CENTER} />
      </AppHStack>
    );
  }

  return (
    <AppVStack max gap={`8`} className={classNames(cls.ProfileCard, { [cls.edit]: !readOnly }, [className])}>
        { data?.avatar &&
            <AppHStack max justifyContent={`center`}>
              <AppAvatar alt={t(`UserAvatar`)} size={64} src={data?.avatar} />
            </AppHStack>
        }
        <AppInput value={data?.first ?? ``} className={cls.field} placeholder={t(`profile:FirstName`)} onChange={onChangeFirstname} readOnly={readOnly} />
        <AppInput value={data?.lastname ?? ``} className={cls.field} placeholder={t(`profile:LastName`)} onChange={onChangeLastname} readOnly={readOnly} />
        <AppInput value={data?.age ?? ``} className={cls.field} placeholder={t(`profile:Age`)} onChange={onChangeAge} readOnly={readOnly} />
        <AppInput value={data?.city ?? ``} className={cls.field} placeholder={t(`profile:City`)} onChange={onChangeCity} readOnly={readOnly} />
        <AppInput value={data?.username ?? ``} className={cls.field} placeholder={t(`profile:Username`)} onChange={onChangeUsername} readOnly={readOnly} />
        <AppInput value={data?.avatar ?? ``} className={cls.field} placeholder={t(`profile:AvatarLink`)} onChange={onChangeAvatar} readOnly={readOnly} />
        <CountrySelect value={data?.country} readOnly={readOnly} onChange={onChangeCountry} />
        <CurrencySelect value={data?.currency} readOnly={readOnly} onChange={onChangeCurrency} />
    </AppVStack>
  );
};
