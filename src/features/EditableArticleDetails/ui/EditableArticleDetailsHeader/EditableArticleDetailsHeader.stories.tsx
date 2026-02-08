import type { Meta, StoryObj } from '@storybook/react';

import { EditableArticleDetailsHeader } from './EditableArticleDetailsHeader';
import { StateDecorator } from '@/shared/config/storybook/decorator/StateDecorator';
import { testArticle } from '@/entities/Article';
import { testUser } from '@/entities/User/model/constants/tests/user';

const meta: Meta<typeof EditableArticleDetailsHeader> = {
  title: 'features/EditableArticleDetails/EditableArticleDetailsHeader',
  component: EditableArticleDetailsHeader,
};

export default meta;

type Story = StoryObj<typeof EditableArticleDetailsHeader>;

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
