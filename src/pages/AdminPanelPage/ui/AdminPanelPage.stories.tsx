import AdminPanelPageSync from "./AdminPanelPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AdminPanelPageSync> = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPageSync,
};

export default meta;

type Story = StoryObj<typeof AdminPanelPageSync>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
