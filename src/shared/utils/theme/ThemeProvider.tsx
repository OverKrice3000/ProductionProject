import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeContext } from "shared/utils/theme/ThemeContext";
import { getInitialTheme } from "shared/utils/theme/helpers";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.add(theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

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
