import { StateDecorator } from "@/app/providers/StateProvider";
import { testArticle } from "@/entities/Article";

import { ArticleAdditionalInfoContainer } from "./ArticleAdditionalInfoContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleAdditionalInfoContainer> = {
  title: "features/EditableArticleDetails/ArticleAdditionalInfoContainer",
  component: ArticleAdditionalInfoContainer,
};

export default meta;

type Story = StoryObj<typeof ArticleAdditionalInfoContainer>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
