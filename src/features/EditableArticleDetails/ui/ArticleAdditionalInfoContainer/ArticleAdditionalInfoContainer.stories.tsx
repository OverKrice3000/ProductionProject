import { ArticleAdditionalInfoContainer } from "./ArticleAdditionalInfoContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleAdditionalInfoContainer> = {
  title: "entities/ArticleAdditionalInfoContainer",
  component: ArticleAdditionalInfoContainer,
};

export default meta;

type Story = StoryObj<typeof ArticleAdditionalInfoContainer>;

export const Default: Story = {};
