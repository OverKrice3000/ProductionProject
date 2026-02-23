import { LoginModal } from "./LoginModal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginModal> = {
  title: "features/AuthByUsername/LoginModal",
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
