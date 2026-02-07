import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';

import { articlesTestState } from 'features/ArticleInfiniteList/model/testData/articlesList';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      articlesList: {
        ...articlesTestState,
      },
    }),
  ],
};

export const Empty: Story = {};
