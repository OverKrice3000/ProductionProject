import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { testComment } from '../../model/testData/comment';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    comment: testComment,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comment: testComment,
  },
};
