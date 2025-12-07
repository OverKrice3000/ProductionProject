import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { Navbar } from "widgets/Navbar";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";

const meta: ComponentMeta<typeof Navbar> = {
  title: `widgets/Navbar`,
  component: Navbar,
};

export default meta;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StateDecorator({
  user: {
    authData: {
      id: `1`,
      username: `username`,
    },
  },
})];
