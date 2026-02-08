import { classNames } from "@/shared/utils/classNames";
import DarkThemeIcon from "@/shared/assets/icons/themeDark.svg";
import LightThemeIcon from "@/shared/assets/icons/themeLight.svg";
import { useTheme } from "@/shared/utils/theme/useTheme";
import { memo } from "react";
import { AppButton, AppButtonTheme } from "@/shared/ui/appButton/AppButton";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  return (
      <AppButton aria-label={t(`SwitchTheme`)} theme={AppButtonTheme.CLEAR} className={classNames(``, {}, [className])} onClick={toggleTheme}>
        {
          theme === `app_light_theme` ? <LightThemeIcon focusable={false} aria-hidden={true} /> : <DarkThemeIcon focusable={false} aria-hidden={true} />
        }
      </AppButton>
  );
});

ThemeSwitcher.displayName = `ThemeSwitcher`;
