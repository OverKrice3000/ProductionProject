import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleSortSelector } from "entities/article";

const meta: ComponentMeta<typeof ArticleSortSelector> = {
  title: `entities/ArticleSortSelector`,
  component: ArticleSortSelector,
};

export default meta;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};
