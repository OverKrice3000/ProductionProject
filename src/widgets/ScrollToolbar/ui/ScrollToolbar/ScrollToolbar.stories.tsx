import { ScrollToolbar } from "./ScrollToolbar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollToolbar> = {
  title: "widgets/ScrollToolbar",
  component: ScrollToolbar,
};

export default meta;

type Story = StoryObj<typeof ScrollToolbar>;

export const Default: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
