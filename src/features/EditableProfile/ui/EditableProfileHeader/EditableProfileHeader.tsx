import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppText } from "@/shared/ui/AppText";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { getAuthData } from "@/entities/User";
import { AppHStack } from "@/shared/ui/AppStack";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps {
  className?: string;
}

export const EditableProfileHeader = ({ className }: ProfilePageHeaderProps) => {
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
