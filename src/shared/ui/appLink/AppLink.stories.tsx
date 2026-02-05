import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink, AppLinkTheme } from "./AppLink";

const meta: ComponentMeta<typeof AppLink> = {
  title: `shared/AppLink`,
  component: AppLink,
  args: {
    to: ``,
  },
};

export default meta;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: `Text`,
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: `Text`,
  theme: AppLinkTheme.INVERTED,
};
