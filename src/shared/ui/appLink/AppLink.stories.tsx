import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";

const meta: ComponentMeta<typeof AppLink> = {
  title: `shared/AppLink`,
  component: AppLink,
  args: {
    to: ``,
  },
};

export default meta;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: `Text`,
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: `Text`,
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: `Text`,
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: `Text`,
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
