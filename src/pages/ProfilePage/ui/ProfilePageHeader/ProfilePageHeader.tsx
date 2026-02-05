import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { AppText } from "shared/ui/appText/AppText";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { useSelector } from "react-redux";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "entities/profile";
import { useAppDispatch } from "shared/utils/hooks/useAppDispatch";
import { useCallback } from "react";
import { getAuthData } from "entities/user";
import { AppHStack } from "shared/ui/appStack/appHStack/AppHStack";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation(`profile`);
  const dispatch = useAppDispatch();

  const authData = useSelector(getAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <AppHStack max className={classNames(``, {}, [className])} justifyContent={`between`}>
      <AppText title={t(`Profile`)} />
      <AppHStack gap={`8`}>
        {canEdit && (
          readonly
            ? <AppButton theme={AppButtonTheme.OUTLINE} onClick={onEdit}>{t(`Edit`)}</AppButton>
            : <>
            <AppButton theme={AppButtonTheme.OUTLINE} onClick={onSave}>{t(`Save`)}</AppButton>
            <AppButton theme={AppButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>{t(`Cancel`)}</AppButton>
          </>
        )}
      </AppHStack>

    </AppHStack>
  );
};
