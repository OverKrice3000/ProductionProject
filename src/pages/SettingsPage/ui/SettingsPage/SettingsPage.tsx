import { useTranslation } from "react-i18next";
import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/widgets/AppPage";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { AppText as AppTextDeprecated } from "@/shared/ui/deprecated/AppText";
import { UiDesignSwitcher } from "@/features/UiDesignSwitcher";
import { ToggleFeatures } from "@/shared/utils/featureFlags";

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation(`settings`);

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppPage gap={`16`} className={classNames(``, {}, [className])}>
          <AppText title={t(`UserSettings`)} />
          <UiDesignSwitcher />
        </AppPage>
      }
      off={
        <AppPage gap={`16`} className={classNames(``, {}, [className])}>
          <AppTextDeprecated title={t(`UserSettings`)} />
          <UiDesignSwitcher />
        </AppPage>
      }
    />
  );
});

SettingsPage.displayName = `SettingsPage`;

export default SettingsPage;
