import type { Theme } from "@/shared/utils/theme/ThemeContext";

export interface JsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
  settingsPageHasBeenOpened?: boolean;
}
