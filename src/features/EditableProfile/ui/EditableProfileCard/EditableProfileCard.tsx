import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { ProfileCard } from "@/entities/Profile";
import type { Currency } from "@/entities/Currency";
import type { Country } from "@/entities/Country";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";

import { profileActions } from "../../model/slice/profileSlice";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileLoadingError } from "../../model/selectors/getProfileLoadingError/getProfileLoadingError";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard = memo(
  ({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();

    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileLoadingError);
    const readOnly = useSelector(getProfileReadonly);

    const onChangeFirstname = useCallback(
      (value: string) => {
        dispatch(profileActions.updateProfile({ first: value }));
      },
      [dispatch],
    );

    const onChangeLastname = useCallback(
      (value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
      },
      [dispatch],
    );

    const onChangeAge = useCallback(
      (value: string) => {
        /^\d+$/.test(value) &&
          dispatch(profileActions.updateProfile({ age: Number(value) }));
      },
      [dispatch],
    );

    const onChangeCity = useCallback(
      (value: string) => {
        dispatch(profileActions.updateProfile({ city: value }));
      },
      [dispatch],
    );

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(profileActions.updateProfile({ username: value }));
      },
      [dispatch],
    );

    const onChangeAvatar = useCallback(
      (value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
      },
      [dispatch],
    );

    const onChangeCurrency = useCallback(
      (value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
      },
      [dispatch],
    );

    const onChangeCountry = useCallback(
      (value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
      },
      [dispatch],
    );

    return (
      <ProfileCard
        className={classNames(``, {}, [className])}
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
    );
  },
);

EditableProfileCard.displayName = `EditableProfileCard`;
