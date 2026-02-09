import AboutPageSync from "./AboutPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AboutPageSync> = {
  title: "pages/AboutPage",
  component: AboutPageSync,
};

export default meta;

type Story = StoryObj<typeof AboutPageSync>;

export const Default: Story = {};
