import type { Theme } from "@/shared/utils/theme/ThemeContext";
import type { StoryFn } from "@storybook/react";
import { ThemeProvider } from "@/shared/utils/theme/ThemeProvider";

export const ThemeProviderDecorator = (theme: Theme) => function StoryDecorator (StoryComponent: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <StoryComponent/>
    </ThemeProvider>
  );
};
