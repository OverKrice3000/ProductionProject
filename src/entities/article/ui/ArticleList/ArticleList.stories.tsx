import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesList } from "./ArticlesList";
import { ArticleView, testArticle } from "../..";

const meta: ComponentMeta<typeof ArticlesList> = {
  title: `entities/ArticleList`,
  component: ArticlesList,
};

export default meta;

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />;

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
