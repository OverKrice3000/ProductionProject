import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleInfiniteList } from "./ArticleInfiniteList";

const meta: ComponentMeta<typeof ArticleInfiniteList> = {
  title: `/ArticleInfiniteList`,
  component: ArticleInfiniteList,
};

export default meta;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Default = Template.bind({});
Default.args = {};
