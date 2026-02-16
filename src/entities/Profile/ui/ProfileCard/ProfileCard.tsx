import { useTranslation } from "react-i18next";

import {
  AppText as AppTextDeprecated,
  TextAlign,
  TextTheme,
} from "@/shared/ui/deprecated/AppText";
import { AppInput as AppInputDeprecated } from "@/shared/ui/deprecated/AppInput";
import { AppAvatar as AppAvatarDeprecated } from "@/shared/ui/deprecated/AppAvatar";
import { AppHStack, AppVStack } from "@/shared/ui/AppStack";
import { AppLoader } from "@/shared/ui/deprecated/AppLoader";
import { classNames } from "@/shared/utils/classNames";
import type { Currency } from "@/entities/Currency";
import { CurrencySelect } from "@/entities/Currency";
import type { Country } from "@/entities/Country";
import { CountrySelect } from "@/entities/Country";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppInput } from "@/shared/ui/redesigned/AppInput";
import { AppCard } from "@/shared/ui/redesigned/AppCard";
import { AppAvatar } from "@/shared/ui/redesigned/AppAvatar";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppText } from "@/shared/ui/redesigned/AppText";

import cls from "./ProfileCard.module.scss";

import type { Profile } from "../..";

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

export const ProfileCard = ({
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
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppCard p={`p24`} max gap={`24`}>
            <AppSkeleton borderRadius={`50%`} width={128} height={128} />
            <AppHStack gap={`16`} max>
              <AppVStack gap={`16`} max>
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
              </AppVStack>
              <AppVStack gap={`16`} max>
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
                <AppSkeleton width={`100%`} height={`38px`} />
              </AppVStack>
            </AppHStack>
          </AppCard>
        }
        off={
          <AppHStack
            max
            justifyContent={`center`}
            className={classNames(cls.ProfileCard, {}, [
              className,
              cls.loading,
            ])}
          >
            <AppLoader />
          </AppHStack>
        }
      />
    );
  }

  if (loadingError) {
    return (
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppHStack
            justifyContent={`center`}
            max
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
          >
            <AppText
              variant={`error`}
              title={t(`profile:${loadingError}Header`)}
              text={t(`profile:${loadingError}Text`)}
              align={TextAlign.CENTER}
            />
          </AppHStack>
        }
        off={
          <AppHStack
            justifyContent={`center`}
            max
            className={classNames(cls.ProfileCard, {}, [className, cls.error])}
          >
            <AppTextDeprecated
              theme={TextTheme.ERROR}
              title={t(`profile:${loadingError}Header`)}
              text={t(`profile:${loadingError}Text`)}
              align={TextAlign.CENTER}
            />
          </AppHStack>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppCard
          p="p24"
          gap={`32`}
          as={`section`}
          max
          className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
          {data?.avatar && (
            <AppHStack max justifyContent={`center`}>
              <AppAvatar alt={t(`UserAvatar`)} size={128} src={data?.avatar} />
            </AppHStack>
          )}
          <AppHStack max gap="24">
            <AppVStack max gap="16">
              <AppInput
                value={data?.first ?? ``}
                label={t(`profile:FirstName`)}
                onChange={onChangeFirstname}
                readOnly={readOnly}
              />
              <AppInput
                value={data?.lastname ?? ``}
                label={t(`profile:LastName`)}
                onChange={onChangeLastname}
                readOnly={readOnly}
              />
              <AppInput
                value={data?.age ?? ``}
                label={t(`profile:Age`)}
                onChange={onChangeAge}
                readOnly={readOnly}
              />
              <AppInput
                value={data?.city ?? ``}
                label={t(`profile:City`)}
                onChange={onChangeCity}
                readOnly={readOnly}
              />
            </AppVStack>
            <AppVStack max gap="16">
              <AppInput
                value={data?.username ?? ``}
                label={t(`profile:Username`)}
                onChange={onChangeUsername}
                readOnly={readOnly}
              />
              <AppInput
                value={data?.avatar ?? ``}
                label={t(`profile:AvatarLink`)}
                onChange={onChangeAvatar}
                readOnly={readOnly}
              />
              <CountrySelect
                value={data?.country}
                readOnly={readOnly}
                onChange={onChangeCountry}
              />
              <CurrencySelect
                value={data?.currency}
                readOnly={readOnly}
                onChange={onChangeCurrency}
              />
            </AppVStack>
          </AppHStack>
        </AppCard>
      }
      off={
        <AppVStack
          as={`section`}
          max
          gap={`8`}
          className={classNames(cls.ProfileCard, { [cls.edit]: !readOnly }, [
            className,
          ])}
        >
          {data?.avatar && (
            <AppHStack max justifyContent={`center`}>
              <AppAvatarDeprecated
                alt={t(`UserAvatar`)}
                size={64}
                src={data?.avatar}
              />
            </AppHStack>
          )}
          <AppInputDeprecated
            value={data?.first ?? ``}
            className={cls.field}
            placeholder={t(`profile:FirstName`)}
            onChange={onChangeFirstname}
            readOnly={readOnly}
          />
          <AppInputDeprecated
            value={data?.lastname ?? ``}
            className={cls.field}
            placeholder={t(`profile:LastName`)}
            onChange={onChangeLastname}
            readOnly={readOnly}
          />
          <AppInputDeprecated
            value={data?.age ?? ``}
            className={cls.field}
            placeholder={t(`profile:Age`)}
            onChange={onChangeAge}
            readOnly={readOnly}
          />
          <AppInputDeprecated
            value={data?.city ?? ``}
            className={cls.field}
            placeholder={t(`profile:City`)}
            onChange={onChangeCity}
            readOnly={readOnly}
          />
          <AppInputDeprecated
            value={data?.username ?? ``}
            className={cls.field}
            placeholder={t(`profile:Username`)}
            onChange={onChangeUsername}
            readOnly={readOnly}
          />
          <AppInputDeprecated
            value={data?.avatar ?? ``}
            className={cls.field}
            placeholder={t(`profile:AvatarLink`)}
            onChange={onChangeAvatar}
            readOnly={readOnly}
          />
          <CountrySelect
            value={data?.country}
            readOnly={readOnly}
            onChange={onChangeCountry}
          />
          <CurrencySelect
            value={data?.currency}
            readOnly={readOnly}
            onChange={onChangeCurrency}
          />
        </AppVStack>
      }
    />
  );
};
