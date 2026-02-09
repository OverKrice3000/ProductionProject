import { useCallback, useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface IUseTheme {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const themeContext = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const nextTheme =
      themeContext.theme === Theme.LIGHT
        ? Theme.DARK
        : themeContext.theme === Theme.DARK
          ? Theme.GREEN
          : Theme.LIGHT;
    themeContext.setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  }, [themeContext]);

  return {
    theme: themeContext.theme,
    setTheme: themeContext.setTheme,
    toggleTheme,
  };
};
