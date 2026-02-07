import type { Meta, StoryObj } from '@storybook/react';

import { ArticleComments } from './ArticleComments';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import {
  emptyNormalizedData,
  normalizeData,
} from 'shared/utils/redux/normalizeData';
import { getTestCommentsList } from 'entities/Comment/model/testData/comment';

const meta: Meta<typeof ArticleComments> = {
  title: 'features/ArticleComments',
  component: ArticleComments,
};

export default meta;

type Story = StoryObj<typeof ArticleComments>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...normalizeData(getTestCommentsList(3), (data) => data.id),
      },
    }),
  ],
};

export const IsLoading: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...emptyNormalizedData,
        isLoading: true,
      },
    }),
  ],
};
