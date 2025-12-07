import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';
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

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: `Text`,
  theme: AppButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: `Text`,
  theme: AppButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

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
