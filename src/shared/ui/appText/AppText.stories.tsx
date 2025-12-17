import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppText, TextTheme } from './AppText';

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

export const Error = Template.bind({});
Error.args = {
  title: `Title Title Title Title`,
  text: `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text`,
  theme: TextTheme.ERROR,
};
