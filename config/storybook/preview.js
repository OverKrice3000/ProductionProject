import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/decorator/StyleDecorator";
import { ThemeProviderDecorator } from "shared/config/storybook/decorator/ThemeProviderDecorator";
import { Theme } from "shared/utils/theme/ThemeContext";

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
addDecorator(ThemeProviderDecorator(Theme.LIGHT));
