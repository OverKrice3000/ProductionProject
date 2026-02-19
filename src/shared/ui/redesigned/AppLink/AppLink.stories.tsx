import { AppLink } from "./AppLink";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLink> = {
  title: "shared/redesigned/AppLink",
  component: AppLink,
  args: {
    to: "",
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Red: Story = {
  args: {
    children: "Text",
    variant: "red",
  },
};
