import type { Theme } from "@/shared/utils/theme/ThemeContext";

export interface JsonSettings {
  theme?: Theme;
  articlesPageHasBeenOpened?: boolean;
  isFirstVisit?: boolean;
}
