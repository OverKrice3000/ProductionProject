import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import MainPageSync from "pages/MainPage/ui/MainPage";

const meta: ComponentMeta<typeof MainPageSync> = {
  title: `pages/MainPage`,
  component: MainPageSync,
};

export default meta;

const Template: ComponentStory<typeof MainPageSync> = () => <MainPageSync />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
