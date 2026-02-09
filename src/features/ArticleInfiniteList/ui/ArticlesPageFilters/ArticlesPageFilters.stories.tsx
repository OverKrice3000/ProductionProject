import type { Meta, StoryObj } from '@storybook/react';
import { StateDecorator } from '@/app/providers/stateProvider/decorator/StateDecorator';

import { ArticlesPageFilters } from './ArticlesPageFilters';
import { articlesTestState } from '../../model/testData/articlesList';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'features/ArticleInfiniteList/ArticlesPageFilters',
  component: ArticlesPageFilters,
};

export default meta;

type Story = StoryObj<typeof ArticlesPageFilters>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      articlesList: {
        ...articlesTestState,
      },
    }),
  ],
};
