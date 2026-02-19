import { AppLoader } from "./AppLoader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLoader> = {
  title: "shared/deprecated/AppLoader",
  component: AppLoader,
};

export default meta;

type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {};
