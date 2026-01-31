import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleList } from "./ArticleList";
import { ArticleView, testArticle } from "entities/article";

const meta: ComponentMeta<typeof ArticleList> = {
  title: `entities/ArticleList`,
  component: ArticleList,
};

export default meta;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const IsLoadingPlate = Template.bind({});
IsLoadingPlate.args = {
  view: ArticleView.PLATE,
  articles: [],
  isLoading: true,
};

export const Plate = Template.bind({});
Plate.args = {
  view: ArticleView.PLATE,
  articles: new Array(9).fill(0).map((_, index) => ({
    ...testArticle,
    id: index.toString(),
  })),
};

export const IsLoadingList = Template.bind({});
IsLoadingList.args = {
  view: ArticleView.LIST,
  articles: [],
  isLoading: true,
};

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
  articles: new Array(3).fill(0).map((_, index) => ({
    ...testArticle,
    id: index.toString(),
  })),
};
