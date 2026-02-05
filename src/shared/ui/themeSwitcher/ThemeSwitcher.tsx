import { classNames } from "shared/utils/classNames";
import { AppButton, AppButtonTheme } from "../appButton/AppButton";
import DarkThemeIcon from "shared/assets/icons/themeDark.svg";
import LightThemeIcon from "shared/assets/icons/themeLight.svg";
import { useTheme } from "shared/utils/theme/useTheme";
import { memo } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
      <AppButton theme={AppButtonTheme.CLEAR} className={classNames(``, {}, [className])} onClick={toggleTheme}>
        {
          theme === `app_light_theme` ? <LightThemeIcon /> : <DarkThemeIcon />
        }
      </AppButton>
  );
});

ThemeSwitcher.displayName = `ThemeSwitcher`;
