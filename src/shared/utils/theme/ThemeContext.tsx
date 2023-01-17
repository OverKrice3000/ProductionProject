import { createContext } from "react";

export type Theme = "light" | "dark";

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const defaultTheme = `light`;
export const LOCAL_STORAGE_THEME_KEY = `theme`;

export const ThemeContext = createContext<IThemeContextProps>({});
