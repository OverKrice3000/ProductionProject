import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppText, TextSize, TextTheme } from './AppText';

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

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: `Title Title Title Title`,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
};

export const Inverted = Template.bind({});
Inverted.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  theme: TextTheme.INVERTED,
};

export const Error = Template.bind({});
Error.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  theme: TextTheme.ERROR,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  size: TextSize.L,
};
