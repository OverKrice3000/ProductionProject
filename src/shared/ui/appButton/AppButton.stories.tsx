import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

const meta: ComponentMeta<typeof AppButton> = {
  title: `shared/AppButton`,
  component: AppButton,
};

export default meta;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: `Text`,
  theme: AppButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: `Text`,
  theme: AppButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: `Text`,
  theme: AppButtonTheme.OUTLINE,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
  children: `Text`,
  size: AppButtonSize.L,
  theme: AppButtonTheme.OUTLINE,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
  children: `Text`,
  size: AppButtonSize.XL,
  theme: AppButtonTheme.OUTLINE,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  children: `Text`,
  theme: AppButtonTheme.OUTLINE_RED,
};

export const Background = Template.bind({});
Background.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: `>`,
  square: true,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: `>`,
  square: true,
  size: AppButtonSize.L,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: `>`,
  square: true,
  size: AppButtonSize.XL,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: `Text`,
  disabled: true,
  theme: AppButtonTheme.OUTLINE,
};
