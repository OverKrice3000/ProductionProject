import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { ErrorLayout } from "app/layouts/ErrorLayout";

const meta: ComponentMeta<typeof ErrorLayout> = {
  title: `app/ErrorLayout`,
  component: ErrorLayout,
};

export default meta;

const Template: ComponentStory<typeof ErrorLayout> = () => <ErrorLayout />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
