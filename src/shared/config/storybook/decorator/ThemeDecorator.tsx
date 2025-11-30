import { Theme } from "shared/utils/theme/ThemeContext";
import { Story } from "@storybook/react";
import { useTheme } from "shared/utils/theme/useTheme";
import { useEffect } from "react";

export const ThemeDecorator = (theme: Theme) => function StoryDecorator (StoryComponent: Story) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, []);

  return (
      <StoryComponent/>
  );
};
