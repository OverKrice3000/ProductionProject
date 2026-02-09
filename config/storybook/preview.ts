import { withThemeByClassName } from "@storybook/addon-themes";

import { StyleDecorator } from "@/shared/config/storybook/decorator/StyleDecorator";
import { Theme } from "@/shared/utils/theme/ThemeContext";
import { RouterDecorator } from "@/shared/config/storybook/decorator/RouterDecorator";
import { ThemeProviderDecorator } from "@/shared/config/storybook/decorator/ThemeProviderDecorator";
import { StateDecorator } from "@/app/providers/StateProvider";

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
      { name: `green`, class: Theme.GREEN, color: `#00ff00` },
    ],
  },
};

export const decorators = [
  StyleDecorator,
  ThemeProviderDecorator(Theme.LIGHT),
  withThemeByClassName({
    themes: {
      light: Theme.LIGHT,
      dark: Theme.DARK,
      green: Theme.GREEN,
    },
    defaultTheme: `light`,
  }),
  StateDecorator(),
  RouterDecorator,
];
