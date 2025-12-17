import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import LoginFormSync from "./LoginForm";

const meta: ComponentMeta<typeof LoginFormSync> = {
  title: `feature/LoginForm`,
  component: LoginFormSync,
};

export default meta;

const Template: ComponentStory<typeof LoginFormSync> = (args) => <LoginFormSync {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StateDecorator({
  login: {
    error: `Incorrect username or password`,
  },
})];
