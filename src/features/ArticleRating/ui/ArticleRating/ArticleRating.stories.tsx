import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { testRating } from '@/entities/Rating';

const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=&articleId= `,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
};

export const Rated: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=&articleId=`,
        method: 'GET',
        status: 200,
        response: [testRating],
      },
    ],
  },
};
