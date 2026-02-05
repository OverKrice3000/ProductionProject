import { memo, useCallback } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import {
  fetchProfileData,
  getProfileLoadingError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/profile";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import type { Currency } from "entities/currency";

import type { Country } from "entities/country/model/types/country";
import {
  getProfileValidationErrors,
} from "entities/profile/model/selectors/getProfileValidationErrors/getProfileValidationErrors";
import { AppText, TextTheme } from "shared/ui/appText/AppText";
import { useTranslation } from "react-i18next";
import { useEnvironmentEffect } from "shared/utils/hooks/useEnvironmentEffect";
import { useParams } from "react-router";
import { AppPage } from "shared/ui/appPage/ui/AppPage/AppPage";
import { classNames } from "shared/utils/classNames";
import { AppVStack } from "shared/ui/appStack/appVStack/AppVStack";

const ProfilePage = memo(() => {
  const { t } = useTranslation(`profile`);
  const dispatch = useAppDispatch();

  useReducer(`profile`, profileReducer);

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileLoadingError);
  const readOnly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const { id } = useParams();

  useEnvironmentEffect(useCallback(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]));

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ first: value }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value: string) => {
    /^\d+$/.test(value) && dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <AppPage className={classNames(``, {}, [])}>
      <AppVStack gap={`16`} max>
        <ProfilePageHeader />
        {validationErrors?.length && validationErrors.map((error) =>
            <AppText theme={TextTheme.ERROR} text={t(error)} key={error} />,
        )}
        <ProfileCard
            data={form}
            isLoading={isLoading}
            loadingError={error}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readOnly={readOnly}
        />
      </AppVStack>

    </AppPage>
  );
});

ProfilePage.displayName = `ProfilePage`;

export default ProfilePage;
