import { AppSkeleton } from "./AppSkeleton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppSkeleton> = {
  title: "shared/deprecated/AppSkeleton",
  component: AppSkeleton,
};

export default meta;

type Story = StoryObj<typeof AppSkeleton>;

export const Default: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    borderRadius: "50%",
    width: 100,
    height: 100,
  },
};
