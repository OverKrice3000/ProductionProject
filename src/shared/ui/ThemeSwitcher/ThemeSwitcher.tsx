import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from '../../utils/classNames';
import DarkThemeIcon from '../../assets/icons/themeDark.svg';
import LightThemeIcon from '../../assets/icons/themeLight.svg';
import { useTheme } from '../../utils/theme/useTheme';
import { AppButton, AppButtonTheme } from '../AppButton/AppButton';

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
