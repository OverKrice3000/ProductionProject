import { useCallback, useContext } from "react";

import { Theme, ThemeContext } from "./ThemeContext";

export interface IUseTheme {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

export const useTheme = (): IUseTheme => {
  const themeContext = useContext(ThemeContext);

  const toggleTheme = useCallback(
    (saveAction: (theme: Theme) => void) => {
      const nextTheme =
        themeContext.theme === Theme.LIGHT
          ? Theme.DARK
          : themeContext.theme === Theme.DARK
            ? Theme.GREEN
            : Theme.LIGHT;
      themeContext.setTheme(nextTheme);
      saveAction(nextTheme);
    },
    [themeContext],
  );

  return {
    theme: themeContext.theme,
    setTheme: themeContext.setTheme,
    toggleTheme,
  };
};
