import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { ThemeSwitcher } from "shared/ui/themeSwitcher/ThemeSwitcher";

const meta: ComponentMeta<typeof ThemeSwitcher> = {
  title: `shared/ThemeSwitcher`,
  component: ThemeSwitcher,
};

export default meta;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
