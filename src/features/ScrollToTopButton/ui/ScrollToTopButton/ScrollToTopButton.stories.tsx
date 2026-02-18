import { ScrollToTopButton } from "./ScrollToTopButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollToTopButton> = {
  title: "features/ScrollToTopButton",
  component: ScrollToTopButton,
};

export default meta;

type Story = StoryObj<typeof ScrollToTopButton>;

export const Default: Story = {};
