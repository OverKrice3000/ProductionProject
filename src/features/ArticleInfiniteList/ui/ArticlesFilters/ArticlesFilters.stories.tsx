import { ArticlesFilters } from "./ArticlesFilters";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlesFilters> = {
  title: "entities/ArticlesFilters",
  component: ArticlesFilters,
};

export default meta;

type Story = StoryObj<typeof ArticlesFilters>;

export const Default: Story = {};
