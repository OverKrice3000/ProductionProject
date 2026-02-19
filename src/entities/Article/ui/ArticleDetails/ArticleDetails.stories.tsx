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

export const DefaultRedesigned: Story = {
  args: {
    article: testArticle,
    isLoading: false,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const LoadingRedesigned: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const ErrorRedesigned: Story = {
  args: {
    error: "Unexpected error occurred.",
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
