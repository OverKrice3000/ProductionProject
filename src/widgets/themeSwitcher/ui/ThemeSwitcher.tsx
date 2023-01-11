import cls from "./ThemeSwitcher.module.scss";
import {classNames} from "shared/utils/classNames";
import {AppButton, AppButtonTheme} from "shared/ui/appButton/AppButton";
import DarkThemeIcon from "shared/assets/icons/themeDark.svg";
import LightThemeIcon from "shared/assets/icons/themeLight.svg";
import {useTheme} from "shared/utils/theme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {className} = props;
  const { theme, toggleTheme } = useTheme();
  return (
      <AppButton theme={AppButtonTheme.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
        {
          theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />
        }
      </AppButton>
  );
};
