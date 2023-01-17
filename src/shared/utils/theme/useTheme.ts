import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const themeContext = useContext(ThemeContext);
  const toggleTheme = useCallback(() => {
    const nextTheme = themeContext.theme === `light` ? `dark` : `light`;
    themeContext.setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme);
  }, [themeContext.theme]);
  return {
    theme: themeContext.theme,
    toggleTheme,
  };
};
