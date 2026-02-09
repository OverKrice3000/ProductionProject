import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import { StateDecorator } from '@/app/providers/StateProvider';
import { testArticle, getTestArticlesList } from '@/entities/Article';

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
      {
        url: `${__API__}/article-ratings?userId=&articleId= `,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};
