import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const meta: ComponentMeta<typeof AboutPage> = {
  title: `pages/AboutPage`,
  component: AboutPage,
};

export default meta;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
