import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { saveJsonSettings } from "@/entities/User";
import { useTheme } from "@/shared/utils/theme/useTheme";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { classNames } from "@/shared/utils/classNames";
import DarkThemeIcon from "@/shared/assets/icons/themeDark.svg";
import LightThemeIcon from "@/shared/assets/icons/themeLight.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <AppButton
      aria-label={t(`SwitchTheme`)}
      theme={AppButtonTheme.CLEAR}
      className={classNames(``, {}, [className])}
      onClick={toggleThemeHandler}
    >
      {theme === `app_light_theme` ? (
        <LightThemeIcon focusable={false} aria-hidden={true} />
      ) : (
        <DarkThemeIcon focusable={false} aria-hidden={true} />
      )}
    </AppButton>
  );
});

ThemeSwitcher.displayName = `ThemeSwitcher`;
