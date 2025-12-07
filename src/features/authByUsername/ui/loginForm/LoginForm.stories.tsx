import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";

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
