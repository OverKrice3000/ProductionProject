import { FC, useMemo, useState } from "react";
import { defaultTheme, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/utils/theme/ThemeContext";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? defaultTheme);
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  );
};
