import { AppLogo } from "./AppLogo";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLogo> = {
  title: "shared/redesigned/AppLogo",
  component: AppLogo,
};

export default meta;

type Story = StoryObj<typeof AppLogo>;

export const Default: Story = {};
