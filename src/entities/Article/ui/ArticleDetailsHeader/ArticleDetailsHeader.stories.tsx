import { StateDecorator } from "@/app/providers/StateProvider";
import { testUser } from "@/entities/User";

import { ArticleDetailsHeader } from "./ArticleDetailsHeader";
import { testArticle } from "../../model/testData/article";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleDetailsHeader> = {
  title: "entities/Article/ArticleDetailsHeader",
  component: ArticleDetailsHeader,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsHeader>;

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
