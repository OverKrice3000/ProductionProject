import { useTranslation } from "react-i18next";
import { memo, useState } from "react";
import { useSelector } from "react-redux";

import { getFeatureFlags, ToggleFeatures } from "@/shared/utils/featureFlags";
import { classNames } from "@/shared/utils/classNames";
import { AppListbox } from "@/shared/ui/redesigned/Popups";
import { AppListbox as AppListboxDeprecated } from "@/shared/ui/deprecated/Popups";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { updateFeatureFlag } from "@/shared/utils/featureFlags/service/updateFeatureFlags";
import { getAuthData } from "@/entities/User";
import { AppHStack } from "@/shared/ui/AppStack";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { AppSkeleton } from "@/shared/ui/redesigned/AppSkeleton";
import { AppSkeleton as AppSkeletonDeprecated } from "@/shared/ui/deprecated/AppSkeleton";
import { useForceUpdate } from "@/shared/utils/render/ForceUpdate";

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation(`settings`);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const forceUpdate = useForceUpdate();

  const isAppRedesigned = getFeatureFlags(`isAppRedesigned`);

  const authData = useSelector(getAuthData);

  const items = [
    {
      content: t(`New`),
      value: `new`,
    },
    {
      content: t(`Old`),
      value: `old`,
    },
  ];

  const onChange = async (value: string) => {
    if (!authData) {
      return;
    }
    setIsLoading(true);
    await dispatch(
      updateFeatureFlag({
        newFeatures: {
          isAppRedesigned: value === `new`,
        },
        userId: authData?.id,
      }),
    );

    setIsLoading(false);
    forceUpdate();
  };

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppHStack gap={`8`}>
          <AppText text={t(`InterfaceVariant`)} />
          {isLoading ? (
            <AppSkeleton width={100} height={40} />
          ) : (
            <AppListbox
              className={classNames(``, {}, [className])}
              items={items}
              value={isAppRedesigned ? `new` : `old`}
              onChange={onChange}
            />
          )}
        </AppHStack>
      }
      off={
        <AppHStack gap={`8`}>
          <AppTextDeprecated text={t(`InterfaceVariant`)} />
          {isLoading ? (
            <AppSkeletonDeprecated width={100} height={40} />
          ) : (
            <AppListboxDeprecated
              className={classNames(``, {}, [className])}
              items={items}
              value={isAppRedesigned ? `new` : `old`}
              onChange={onChange}
            />
          )}
        </AppHStack>
      }
    />
  );
});

UiDesignSwitcher.displayName = `UiDesignSwitcher`;
