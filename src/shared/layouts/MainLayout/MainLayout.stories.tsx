import { MainLayout } from "./MainLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainLayout> = {
  title: "entities/MainLayout",
  component: MainLayout,
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {};
