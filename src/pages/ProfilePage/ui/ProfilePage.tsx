import cls from "./ProfilePage.module.scss";
import { memo, useCallback, useEffect } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/profile";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useReducer(`profile`, profileReducer);

  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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

  return (
    <div className={cls.profilePage}>
      <ProfilePageHeader />
      <ProfileCard
        data={form}
        isLoading={isLoading}
        error={error}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        readOnly={readOnly}
      />
    </div>
  );
});

ProfilePage.displayName = `ProfilePage`;

export default ProfilePage;
