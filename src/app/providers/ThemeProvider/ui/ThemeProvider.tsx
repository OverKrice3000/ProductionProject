import { FC, useEffect, useMemo, useState } from "react";
import { Theme, ThemeContext } from "shared/utils/theme/ThemeContext";
import { getInitialTheme } from "shared/utils/theme/helpers";

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.body.className = theme;
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
