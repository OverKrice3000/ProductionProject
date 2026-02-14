import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { AppButton } from "../AppButton/AppButton";
import { classNames } from "../../../utils/classNames";

import type { AppButtonProps } from "../AppButton/AppButton";
import type { Write } from "../../../types/types";

export type LangType = "ru" | "en";

type LangSwitcherProps = Write<
  AppButtonProps,
  {
    className?: string;
    short?: boolean;
  }
>;

export const LangSwitcher = memo(
  ({ className, short, ...other }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = useCallback(() => {
      i18n.changeLanguage(i18n.language === `ru` ? `en` : `ru`);
    }, [i18n]);

    return (
      <AppButton
        aria-label={t(`ChangeLanguage`)}
        {...other}
        className={classNames(``, {}, [className])}
        onClick={toggleLang}
      >
        {t(short ? `Language` : `ShortLanguage`)}
      </AppButton>
    );
  },
);

LangSwitcher.displayName = `LangSwitcher`;
