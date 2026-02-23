import { ErrorLayout } from "./ErrorLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ErrorLayout> = {
  title: "app/ErrorLayout",
  component: ErrorLayout,
};

export default meta;

type Story = StoryObj<typeof ErrorLayout>;

export const Default: Story = {};
