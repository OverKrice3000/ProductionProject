import { ThemeProvider } from "@/app/providers/ThemeProvider";

import type { Theme } from "../../../utils/theme/ThemeContext";
import type { StoryFn } from "@storybook/react";

export const ThemeProviderDecorator = (theme: Theme) =>
  function StoryDecorator(StoryComponent: StoryFn) {
    return (
      <ThemeProvider initialTheme={theme}>
        <StoryComponent />
      </ThemeProvider>
    );
  };
