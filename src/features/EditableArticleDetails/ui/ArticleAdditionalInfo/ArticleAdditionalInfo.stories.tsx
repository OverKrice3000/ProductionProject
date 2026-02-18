import { StateDecorator } from "@/app/providers/StateProvider";
import { testArticle } from "@/entities/Article";
import { testUser } from "@/entities/User";

import { ArticleAdditionalInfo } from "./ArticleAdditionalInfo";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleAdditionalInfo> = {
  title: "features/EditableArticleDetails/ArticleAdditionalInfo",
  component: ArticleAdditionalInfo,
};

export default meta;

type Story = StoryObj<typeof ArticleAdditionalInfo>;

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
