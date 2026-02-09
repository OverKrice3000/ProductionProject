import type { Meta, StoryObj } from '@storybook/react';

import CommentForm from './CommentForm';
import { action } from '@storybook/addon-actions';
import { StateDecorator } from '@/app/providers/stateProvider/decorator/StateDecorator';

const meta: Meta<typeof CommentForm> = {
  title: 'entities/Comment/CommentForm',
  component: CommentForm,
  args: {
    onTextChange: action('onTextChange'),
    onSendComment: action('onSendComment'),
  },
};

export default meta;

type Story = StoryObj<typeof CommentForm>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      articleCommentsForm: {
        text: 'Test comment',
      },
    }),
  ],
};
