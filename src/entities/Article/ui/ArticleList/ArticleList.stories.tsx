import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesList } from "./ArticlesList";
import { ArticleView } from "../..";
import { getTestArticlesList } from "../../model/testData/article";

const meta: ComponentMeta<typeof ArticlesList> = {
  title: `entities/Article/ArticleList`,
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
  articles: getTestArticlesList(9),
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
  articles: getTestArticlesList(3),
};
