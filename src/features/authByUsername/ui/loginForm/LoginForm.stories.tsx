import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import LoginForm from "./LoginForm";
import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";

const meta: ComponentMeta<typeof LoginForm> = {
  title: `feature/LoginForm`,
  component: LoginForm,
};

export default meta;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StateDecorator({
  login: {
    error: `Incorrect username or password`,
  },
} as DeepPartial<StateSchema>)];
