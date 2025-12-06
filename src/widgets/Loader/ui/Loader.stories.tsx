import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { Loader } from "widgets/Loader";

const meta: ComponentMeta<typeof Loader> = {
  title: `widgets/Loader`,
  component: Loader,
};

export default meta;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
