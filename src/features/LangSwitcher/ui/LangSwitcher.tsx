import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { ToggleFeatures } from "@/shared/utils/featureFlags";
import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton/AppButton";
import { classNames } from "@/shared/utils/classNames";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation(`lang`);

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === `ru` ? `en` : `ru`);
  }, [i18n]);

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppButton
          aria-label={t(`ChangeLanguage`)}
          variant={`clear`}
          className={classNames(``, {}, [className])}
          onClick={toggleLang}
        >
          {t(short ? `Language` : `ShortLanguage`)}
        </AppButton>
      }
      off={
        <AppButtonDeprecated
          aria-label={t(`ChangeLanguage`)}
          theme={AppButtonTheme.CLEAR_INVERTED}
          className={classNames(``, {}, [className])}
          onClick={toggleLang}
        >
          {t(short ? `Language` : `ShortLanguage`)}
        </AppButtonDeprecated>
      }
    />
  );
});

LangSwitcher.displayName = `LangSwitcher`;
