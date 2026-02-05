import { defaultTheme, LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";
import { isSomeEnum } from "../utils";

export const isTheme = isSomeEnum(Theme);

export const getInitialTheme = (): Theme => {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  if (localStorageTheme !== null && isTheme(localStorageTheme)) {
    return localStorageTheme;
  }
  return defaultTheme;
};
