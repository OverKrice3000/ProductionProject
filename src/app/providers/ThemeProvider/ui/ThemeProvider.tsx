import { useEffect, useMemo, useState } from "react";

import { useJsonSettings } from "@/entities/User";

import {
  Theme,
  ThemeContext,
} from "../../../../shared/utils/theme/ThemeContext";

import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? Theme.LIGHT);
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const jsonSettingsTheme = useJsonSettings().theme;

  console.warn(jsonSettingsTheme);

  useEffect(() => {
    console.warn(`HEE`);
    if (jsonSettingsTheme && !isThemeInitialized) {
      setTheme(jsonSettingsTheme);
      setIsThemeInitialized(true);
    }
  }, [isThemeInitialized, jsonSettingsTheme]);

  useEffect(() => {
    document.documentElement.classList.add(theme);

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
