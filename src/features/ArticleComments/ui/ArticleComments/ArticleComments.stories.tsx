import { StateDecorator } from "@/app/providers/StateProvider";
import {
  emptyNormalizedData,
  normalizeData,
} from "@/shared/utils/redux/normalizeData";
import { getTestCommentsList } from "@/entities/Comment";

import { ArticleComments } from "./ArticleComments";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleComments> = {
  title: "features/ArticleComments",
  component: ArticleComments,
};

export default meta;

type Story = StoryObj<typeof ArticleComments>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...normalizeData(getTestCommentsList(3), (data) => data.id),
      },
    }),
  ],
};

export const IsLoading: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...emptyNormalizedData,
        isLoading: true,
      },
    }),
  ],
};

export const Redesigned: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...normalizeData(getTestCommentsList(3), (data) => data.id),
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const IsLoadingRedesigned: Story = {
  decorators: [
    StateDecorator({
      comments: {
        ...emptyNormalizedData,
        isLoading: true,
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
