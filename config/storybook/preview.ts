import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/decorator/StyleDecorator";
import { Theme } from "shared/utils/theme/ThemeContext";
import { RouterDecorator } from "shared/config/storybook/decorator/RouterDecorator";
import { ThemeProviderDecorator } from "shared/config/storybook/decorator/ThemeProviderDecorator";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";

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
addDecorator(StateDecorator());
addDecorator(RouterDecorator);
addDecorator(ThemeProviderDecorator(Theme.LIGHT));
