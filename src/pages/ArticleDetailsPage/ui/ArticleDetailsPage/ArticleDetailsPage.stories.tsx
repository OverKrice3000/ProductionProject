import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import { StateDecorator } from '@/shared/config/storybook/decorator/StateDecorator';
import { testArticle } from '@/entities/Article';
import { getTestArticlesList } from '@/entities/Article/model/testData/article';

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit`,
        method: 'GET',
        status: 200,
        response: getTestArticlesList(3),
      },
    ],
  },
};
