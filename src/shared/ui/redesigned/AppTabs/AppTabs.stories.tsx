import { action } from "@storybook/addon-actions";

import { AppTabs } from "./AppTabs";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppTabs> = {
  title: "shared/redesigned/AppTabs",
  component: AppTabs,
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        value: "tab 1",
        content: "tab 1",
      },
      {
        value: "tab 2",
        content: "tab 2",
      },
      {
        value: "tab 3",
        content: "tab 3",
      },
    ],
    value: "tab 1",
    onTabClick: action("onTabClick"),
  },
};
