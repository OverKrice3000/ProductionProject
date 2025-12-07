import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppText, TextTheme } from './AppText';
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { Theme } from "shared/utils/theme/ThemeContext";

const meta: ComponentMeta<typeof AppText> = {
  title: `shared/AppText`,
  component: AppText,
};

export default meta;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: `Title Title Title Title`,
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: `Title Title Title Title`,
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
