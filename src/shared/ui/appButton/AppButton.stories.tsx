import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppButton, AppButtonTheme } from './AppButton';
import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";

const meta: ComponentMeta<typeof AppButton> = {
  title: `shared/AppButton`,
  component: AppButton,
};

export default meta;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Text`,
  theme: AppButtonTheme.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: `Text`,
  theme: AppButtonTheme.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: `Text`,
  theme: AppButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: `Text`,
  theme: AppButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: `Text`,
  theme: AppButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: `Text`,
  theme: AppButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
