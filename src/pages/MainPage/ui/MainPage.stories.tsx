import MainPageSync from "./MainPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainPageSync> = {
  title: "pages/MainPage",
  component: MainPageSync,
};

export default meta;

type Story = StoryObj<typeof MainPageSync>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
