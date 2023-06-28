import { createContext } from "react";

export enum Theme {
  LIGHT = `app_light_theme`,
  DARK = `app_dark_theme`
}

export const defaultTheme = Theme.LIGHT;
export const LOCAL_STORAGE_THEME_KEY = `theme`;

export interface IThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {
    throw new Error(`Attempt to use not initialized context`);
  },
});
