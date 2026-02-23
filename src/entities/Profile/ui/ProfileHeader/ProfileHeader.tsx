import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppHStack } from "@/shared/ui/AppStack";
import { classNames } from "@/shared/utils/classNames";
import { getAuthData } from "@/entities/User";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppButton } from "@/shared/ui/redesigned/AppButton";
import { AppCard } from "@/shared/ui/redesigned/AppCard";

import type { Profile } from "../../model/types/profile";

interface ProfilePageHeaderProps {
  className?: string;
  profile?: Profile;
  readonly?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
  onCancelEdit?: () => void;
}

export const ProfileHeader = ({
  className,
  profile,
  readonly,
  onSave,
  onEdit,
  onCancelEdit,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation(`profile`);

  const authData = useSelector(getAuthData);
  const canEdit = authData?.id === profile?.id;

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
          maxW
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
