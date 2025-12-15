import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import AboutPageSync from "pages/AboutPage/ui/AboutPage";

const meta: ComponentMeta<typeof AboutPageSync> = {
  title: `pages/AboutPage`,
  component: AboutPageSync,
};

export default meta;

const Template: ComponentStory<typeof AboutPageSync> = () => <AboutPageSync />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
