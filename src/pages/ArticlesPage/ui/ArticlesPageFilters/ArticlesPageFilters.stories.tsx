import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesPageFilters } from "./ArticlesPageFilters";

const meta: ComponentMeta<typeof ArticlesPageFilters> = {
  title: `pages/ArticlesPageFilters`,
  component: ArticlesPageFilters,
};

export default meta;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Default = Template.bind({});
Default.args = {};
