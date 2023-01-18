import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";

export type LangType = "ru" | "en";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === `ru` ? `en` : `ru`);
  }, [i18n]);
  return (
      <AppButton theme={AppButtonTheme.CLEAR} className={classNames(``, {}, [className])} onClick={toggleLang}>
        {t(`ToggleLang`)}
      </AppButton>
  );
};
