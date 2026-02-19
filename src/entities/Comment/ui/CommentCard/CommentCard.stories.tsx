import { CommentCard } from "./CommentCard";
import { testComment } from "../../model/testData/comment";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    comment: testComment,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comment: testComment,
  },
};

export const DefaultRedesigned: Story = {
  args: {
    comment: testComment,
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
    comment: testComment,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
