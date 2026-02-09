import { AppLink, AppLinkTheme } from "./AppLink";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "",
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Text",
    theme: AppLinkTheme.INVERTED,
  },
};
