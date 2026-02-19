import ArticleEditPage from "./ArticleEditPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleEditPage> = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
};

export default meta;

type Story = StoryObj<typeof ArticleEditPage>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
