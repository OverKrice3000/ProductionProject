import { ArticleAdditionalInfo } from "./ArticleAdditionalInfo";
import { testArticle } from "../../model/testData/article";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleAdditionalInfo> = {
  title: "entities/Article/ArticleAdditionalInfo",
  component: ArticleAdditionalInfo,
};

export default meta;

type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Default: Story = {
  args: {
    articleId: testArticle.id,
    author: testArticle.user,
    createdAt: testArticle.createdAt,
    views: testArticle.views,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
