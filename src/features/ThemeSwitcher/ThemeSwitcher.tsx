import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { AppButton, AppButtonTheme } from "@/shared/ui/deprecated/AppButton";
import { AppIcon, AppIconColor } from "@/shared/ui/deprecated/AppIcon";
import { saveJsonSettings } from "@/entities/User";
import { useTheme } from "@/shared/utils/theme/useTheme";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";
import ThemeIcon from "@/shared/assets/icons/themeLight.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { t } = useTranslation();
  const { toggleTheme } = useTheme();
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
      <AppIcon
        width={40}
        height={40}
        color={AppIconColor.INVERTED_PRIMARY}
        focusable={false}
        aria-hidden={true}
        Svg={ThemeIcon}
      />
    </AppButton>
  );
});

ThemeSwitcher.displayName = `ThemeSwitcher`;
