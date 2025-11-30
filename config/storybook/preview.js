import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/decorator/StyleDecorator";
import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";

export const parameters = {
  actions: { argTypesRegex: `^on[A-Z].*` },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
