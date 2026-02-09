
import { ArticlesList } from './ArticlesList';
import { ArticleView } from '../..';
import { getTestArticlesList } from '../../model/testData/article';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesList> = {
  title: 'entities/Article/ArticleList',
  component: ArticlesList,
};

export default meta;

type Story = StoryObj<typeof ArticlesList>;

export const IsLoadingPlate: Story = {
  args: {
    view: ArticleView.PLATE,
    articles: [],
    isLoading: true,
  },
};

export const Plate: Story = {
  args: {
    view: ArticleView.PLATE,
    articles: getTestArticlesList(9),
  },
};

export const IsLoadingList: Story = {
  args: {
    view: ArticleView.LIST,
    articles: [],
    isLoading: true,
  },
};

export const List: Story = {
  args: {
    view: ArticleView.LIST,
    articles: getTestArticlesList(3),
  },
};
