import { ArticleTextBlock } from "./ArticleTextBlock";
import { testTextBlock } from "../../model/testData/article";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleTextBlock> = {
  title: "entities/Article/ArticleTextBlock",
  component: ArticleTextBlock,
};

export default meta;

type Story = StoryObj<typeof ArticleTextBlock>;

export const Default: Story = {
  args: {
    block: testTextBlock,
  },
};

export const Redesigned: Story = {
  args: {
    block: testTextBlock,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
