import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector, ArticleView } from "entities/article";

const meta: ComponentMeta<typeof ArticleViewSelector> = {
  title: `entities/ArticleViewSelector`,
  component: ArticleViewSelector,
};

export default meta;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  view: ArticleView.PLATE,
};
