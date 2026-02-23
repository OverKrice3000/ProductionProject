import { useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entities/User";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "@/shared/utils/theme/ThemeContext";

import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    initialTheme ?? fallbackTheme ?? Theme.LIGHT,
  );
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const jsonSettingsTheme = useJsonSettings().theme;

  useEffect(() => {
    if (jsonSettingsTheme && !isThemeInitialized) {
      setTheme(jsonSettingsTheme);
      setIsThemeInitialized(true);
    }
  }, [isThemeInitialized, jsonSettingsTheme]);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
