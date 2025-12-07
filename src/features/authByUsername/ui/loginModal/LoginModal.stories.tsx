import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";

const meta: ComponentMeta<typeof LoginModal> = {
  title: `feature/LoginModal`,
  component: LoginModal,
};

export default meta;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  isOpen: true,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
