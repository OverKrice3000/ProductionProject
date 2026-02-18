import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { getAuthData } from "@/entities/User";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps {
  className?: string;
}

export const EditableProfileHeader = ({
  className,
}: ProfilePageHeaderProps) => {
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
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppCard
          direction={`row`}
          p={`p16`}
          max
          className={classNames(``, {}, [className])}
          justifyContent={`between`}
        >
          <AppText title={t(`Profile`)} />
          <AppHStack gap={`8`}>
            {canEdit &&
              (readonly ? (
                <AppButton variant={`outline`} onClick={onEdit}>
                  {t(`Edit`)}
                </AppButton>
              ) : (
                <>
                  <AppButton
                    variant={`outline`}
                    onClick={onSave}
                    color={`success`}
                  >
                    {t(`Save`)}
                  </AppButton>
                  <AppButton onClick={onCancelEdit} color={`error`}>
                    {t(`Cancel`)}
                  </AppButton>
                </>
              ))}
          </AppHStack>
        </AppCard>
      }
      off={
        <AppHStack
          max
          className={classNames(``, {}, [className])}
          justifyContent={`between`}
        >
          <AppTextDeprecated title={t(`Profile`)} />
          <AppHStack gap={`8`}>
            {canEdit &&
              (readonly ? (
                <AppButtonDeprecated
                  theme={AppButtonTheme.OUTLINE}
                  onClick={onEdit}
                >
                  {t(`Edit`)}
                </AppButtonDeprecated>
              ) : (
                <>
                  <AppButtonDeprecated
                    theme={AppButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t(`Save`)}
                  </AppButtonDeprecated>
                  <AppButtonDeprecated
                    theme={AppButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                  >
                    {t(`Cancel`)}
                  </AppButtonDeprecated>
                </>
              ))}
          </AppHStack>
        </AppHStack>
      }
    />
  );
};
