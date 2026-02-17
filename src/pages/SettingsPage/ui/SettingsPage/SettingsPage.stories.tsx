import SettingsPage from "./SettingsPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SettingsPage> = {
  title: "pages/SettingsPage",
  component: SettingsPage,
};

export default meta;

type Story = StoryObj<typeof SettingsPage>;

export const Default: Story = {};
