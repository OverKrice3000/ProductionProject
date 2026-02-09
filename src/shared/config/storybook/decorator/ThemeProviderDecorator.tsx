import type { Theme } from '../../../utils/theme/ThemeContext';
import type { StoryFn } from "@storybook/react";
import { ThemeProvider } from '../../../utils/theme/ThemeProvider';

export const ThemeProviderDecorator = (theme: Theme) => function StoryDecorator (StoryComponent: StoryFn) {
  return (
    <ThemeProvider initialTheme={theme}>
      <StoryComponent/>
    </ThemeProvider>
  );
};
