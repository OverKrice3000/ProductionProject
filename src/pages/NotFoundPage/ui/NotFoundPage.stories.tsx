import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { NotFoundPage } from "pages/NotFoundPage";

const meta: ComponentMeta<typeof NotFoundPage> = {
  title: `pages/NotFoundPage`,
  component: NotFoundPage,
};

export default meta;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
