import { Theme } from "shared/utils/theme/ThemeContext";
import { Story } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => function StoryDecorator (StoryComponent: Story) {
  return (
    <div className={theme}>
      <StoryComponent/>
    </div>
  );
};
