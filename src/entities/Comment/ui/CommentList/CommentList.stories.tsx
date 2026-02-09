
import { CommentList } from './CommentList';
import { getTestCommentsList } from '../../model/testData/comment';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
  args: {
    comments: getTestCommentsList(3),
  },
};

export const Empty: Story = {
  args: {
    comments: [],
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
