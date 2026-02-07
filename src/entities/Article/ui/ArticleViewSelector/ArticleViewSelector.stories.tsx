import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleViewSelector, ArticleView } from "../..";

const meta: ComponentMeta<typeof ArticleViewSelector> = {
  title: `entities/Article/ArticleViewSelector`,
  component: ArticleViewSelector,
};

export default meta;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  view: ArticleView.PLATE,
};
