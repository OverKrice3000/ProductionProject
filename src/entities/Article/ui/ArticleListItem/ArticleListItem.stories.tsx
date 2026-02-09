
import { ArticleListItem } from './ArticleListItem';
import { ArticleView, testArticle } from '../..';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
};

export default meta;

type Story = StoryObj<typeof ArticleListItem>;

export const Plate: Story = {
  args: {
    view: ArticleView.PLATE,
    article: testArticle,
  },
};

export const List: Story = {
  args: {
    view: ArticleView.LIST,
    article: testArticle,
  },
};
