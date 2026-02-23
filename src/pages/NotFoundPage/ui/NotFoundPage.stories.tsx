import { NotFoundPage } from "./NotFoundPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
