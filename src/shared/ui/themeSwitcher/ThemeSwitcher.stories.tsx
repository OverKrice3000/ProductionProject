import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeSwitcher } from "shared/ui/themeSwitcher/ThemeSwitcher";

const meta: ComponentMeta<typeof ThemeSwitcher> = {
  title: `shared/ThemeSwitcher`,
  component: ThemeSwitcher,
};

export default meta;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
