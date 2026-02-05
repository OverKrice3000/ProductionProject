import { classNames } from "shared/utils/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import type { AppButtonProps } from "../appButton/AppButton";
import { AppButton } from "../appButton/AppButton";
import type { Write } from "shared/types/types";

export type LangType = "ru" | "en";

type LangSwitcherProps = Write<AppButtonProps, {
  className?: string;
  short?: boolean;
}>;

export const LangSwitcher = memo(({ className, short, ...other }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === `ru` ? `en` : `ru`);
  }, [i18n]);

  return (
      <AppButton {...other} className={classNames(``, {}, [className])} onClick={toggleLang}>
        {t(short ? `Language` : `ShortLanguage`)}
      </AppButton>
  );
});

LangSwitcher.displayName = `LangSwitcher`;
