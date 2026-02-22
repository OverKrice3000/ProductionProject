import { useTranslation } from "react-i18next";
import { memo } from "react";

import { classNames } from "@/shared/utils/classNames";
import { AppPage } from "@/widgets/AppPage";
import { AppText } from "@/shared/ui/redesigned/AppText";
import { UiDesignSwitcher } from "@/features/UiDesignSwitcher";

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation(`settings`);

  return (
    <AppPage gap={`16`} className={classNames(``, {}, [className])}>
      <AppText title={t(`UserSettings`)} />
      <UiDesignSwitcher />
    </AppPage>
  );
});

SettingsPage.displayName = `SettingsPage`;

export default SettingsPage;
