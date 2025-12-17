import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/decorator/StyleDecorator";
import { Theme } from "shared/utils/theme/ThemeContext";
import { RouterDecorator } from "shared/config/storybook/decorator/RouterDecorator";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { ThemeProviderDecorator } from "shared/config/storybook/decorator/ThemeProviderDecorator";

export const parameters = {
  actions: { argTypesRegex: `^on[A-Z].*` },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: `light`,
    list: [
      { name: `light`, class: Theme.LIGHT, color: `#ffffff` },
      { name: `dark`, class: Theme.DARK, color: `#000000` },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeProviderDecorator(Theme.LIGHT));
addDecorator(StateDecorator());
addDecorator(RouterDecorator);
