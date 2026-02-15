import { StickyLayout } from "./StickyLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StickyLayout> = {
  title: "entities/StickyLayout",
  component: StickyLayout,
};

export default meta;

type Story = StoryObj<typeof StickyLayout>;

export const Default: Story = {};
