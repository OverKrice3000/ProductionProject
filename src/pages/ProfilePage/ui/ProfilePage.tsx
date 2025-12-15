import cls from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useReducer } from "shared/utils/hooks/useReducer";
import { profileReducer } from "entities/profile";

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  useReducer(`profile`, profileReducer);

  return (
    <div className={cls.profilePage}>
      {t(`ProfilePage`)}
    </div>
  );
});

ProfilePage.displayName = `ProfilePage`;

export default ProfilePage;
