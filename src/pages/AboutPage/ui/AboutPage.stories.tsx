import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AboutPageSync from "pages/AboutPage/ui/AboutPage";

const meta: ComponentMeta<typeof AboutPageSync> = {
  title: `pages/AboutPage`,
  component: AboutPageSync,
};

export default meta;

const Template: ComponentStory<typeof AboutPageSync> = () => <AboutPageSync />;

export const Default = Template.bind({});
Default.args = {};
