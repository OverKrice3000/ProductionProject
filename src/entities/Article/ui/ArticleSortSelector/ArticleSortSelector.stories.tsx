import { ArticleSortSelector } from "../..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleSortSelector> = {
  title: "entities/Article/ArticleSortSelector",
  component: ArticleSortSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
