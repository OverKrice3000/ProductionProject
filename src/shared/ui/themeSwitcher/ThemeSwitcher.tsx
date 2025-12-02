import { classNames } from "shared/utils/classNames";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import DarkThemeIcon from "shared/assets/icons/themeDark.svg";
import LightThemeIcon from "shared/assets/icons/themeLight.svg";
import { useTheme } from "shared/utils/theme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
      <AppButton theme={AppButtonTheme.CLEAR} className={classNames(``, {}, [className])} onClick={toggleTheme}>
        {
          theme === `app_light_theme` ? <LightThemeIcon /> : <DarkThemeIcon />
        }
      </AppButton>
  );
};
