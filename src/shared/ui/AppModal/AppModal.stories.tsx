import { AppModal } from "./AppModal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppModal> = {
  title: "shared/AppModal",
  component: AppModal,
};

export default meta;

type Story = StoryObj<typeof AppModal>;

export const Default: Story = {
  args: {
    children: "Text",
    isOpen: true,
  },
};

export const Redesigned: Story = {
  args: {
    children: "Text",
    isOpen: true,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
