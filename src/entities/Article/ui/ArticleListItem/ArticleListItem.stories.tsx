import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleListItem } from "./ArticleListItem";
import { ArticleView, testArticle } from "../..";

const meta: ComponentMeta<typeof ArticleListItem> = {
  title: `entities/Article/ArticleListItem`,
  component: ArticleListItem,
};

export default meta;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Plate = Template.bind({});
Plate.args = {
  view: ArticleView.PLATE,
  article: testArticle,
};

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
  article: testArticle,
};
