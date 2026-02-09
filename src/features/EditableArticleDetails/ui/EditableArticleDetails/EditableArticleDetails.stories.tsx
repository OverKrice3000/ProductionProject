import { StateDecorator } from '@/app/providers/StateProvider';
import { testArticle } from '@/entities/Article';
import { testUser } from '@/entities/User';

import { EditableArticleDetails } from './EditableArticleDetails';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditableArticleDetails> = {
  title: 'features/EditableArticleDetails/EditableArticleDetails',
  component: EditableArticleDetails,
};

export default meta;

type Story = StoryObj<typeof EditableArticleDetails>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
    }),
  ],
};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
      user: {
        authData: testUser,
      },
    }),
  ],
};

export const IsLoading: Story = {
  decorators: [
    StateDecorator({
      article: {
        isLoading: true,
      },
    }),
  ],
};
