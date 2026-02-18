import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { ToggleFeatures } from "../../../utils/features";
import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "../AppButton/AppButton";
import { classNames } from "../../../utils/classNames";
import { AppButton } from "../../redesigned/AppButton";

export type LangType = "ru" | "en";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

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
