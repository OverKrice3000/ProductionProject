import cls from "./ProfilePage.module.scss";
import { memo, useEffect } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/profile";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useReducer(`profile`, profileReducer);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div className={cls.profilePage}>
      <ProfileCard />
    </div>
  );
});

ProfilePage.displayName = `ProfilePage`;

export default ProfilePage;
