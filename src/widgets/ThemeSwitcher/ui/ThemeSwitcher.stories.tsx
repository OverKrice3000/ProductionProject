import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: ComponentMeta<typeof ThemeSwitcher> = {
  title: `widgets/ThemeSwitcher`,
  component: ThemeSwitcher,
};

export default meta;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
