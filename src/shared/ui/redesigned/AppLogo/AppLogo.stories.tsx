import { AppLogo } from "./AppLogo";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLogo> = {
  title: "shared/redesigned/AppLogo",
  component: AppLogo,
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppLogo>;

export const Default: Story = {
  args: {
    size: 128,
  },
};
