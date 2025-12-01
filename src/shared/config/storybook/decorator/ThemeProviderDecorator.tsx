import { Theme } from "shared/utils/theme/ThemeContext";
import { Story } from "@storybook/react";
import { ThemeProvider } from "shared/utils/theme/ThemeProvider";

export const ThemeProviderDecorator = (theme: Theme) => function StoryDecorator (StoryComponent: Story) {
  return (
    <ThemeProvider initialTheme={theme}>
      <StoryComponent/>
    </ThemeProvider>
  );
};
