import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import {
  AppIcon as AppIconDeprecated,
  AppIconColor,
} from "@/shared/ui/deprecated/AppIcon";
import { saveJsonSettings } from "@/entities/User";
import { useTheme } from "@/shared/utils/theme/useTheme";
import { useAppDispatch } from "@/shared/utils/hooks/useAppDispatch";
import { classNames } from "@/shared/utils/classNames";
import ThemeIconDeprecated from "@/shared/assets/icons/themeLight.svg";
import ThemeIcon from "@/shared/assets/icons/redesigned/theme.svg";
import { ToggleFeatures } from "@/shared/utils/featureFlags";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { t } = useTranslation(`theme`);
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppIcon
          className={classNames(``, {}, [className])}
          aria-label={t(`SwitchTheme`)}
          width={40}
          height={40}
          focusable={false}
          aria-hidden={true}
          Svg={ThemeIcon}
          onClick={toggleThemeHandler}
          clickable
        />
      }
      off={
        <AppButtonDeprecated
          aria-label={t(`SwitchTheme`)}
          theme={AppButtonTheme.CLEAR}
          className={classNames(``, {}, [className])}
          onClick={toggleThemeHandler}
        >
          <AppIconDeprecated
            width={40}
            height={40}
            color={AppIconColor.INVERTED_PRIMARY}
            focusable={false}
            aria-hidden={true}
            Svg={ThemeIconDeprecated}
          />
        </AppButtonDeprecated>
      }
    />
  );
});

ThemeSwitcher.displayName = `ThemeSwitcher`;
