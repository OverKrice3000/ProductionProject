import { ArticleDetails } from "./ArticleDetails";
import { testArticle } from "../../model/testData/article";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleDetails> = {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Default: Story = {
  args: {
    article: testArticle,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: "Unexpected error occurred.",
  },
};
