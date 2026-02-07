import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView, ArticleViewSelector } from '../..';

const meta: Meta<typeof ArticleViewSelector> = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Default: Story = {
  args: {
    view: ArticleView.PLATE,
  },
};
