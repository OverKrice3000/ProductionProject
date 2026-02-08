import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendations } from './ArticleRecommendations';
import { getTestArticlesList } from '@/entities/Article';

const meta: Meta<typeof ArticleRecommendations> = {
  title: 'features/ArticleRecommendations',
  component: ArticleRecommendations,
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendations>;

export const Default: Story = {
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
