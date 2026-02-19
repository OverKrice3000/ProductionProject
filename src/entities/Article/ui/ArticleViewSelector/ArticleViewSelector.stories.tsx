import { ArticleView, ArticleViewSelector } from "../..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleViewSelector> = {
  title: "entities/Article/ArticleViewSelector",
  component: ArticleViewSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Default: Story = {
  args: {
    view: ArticleView.PLATE,
  },
};

export const Redesigned: Story = {
  args: {
    view: ArticleView.PLATE,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
