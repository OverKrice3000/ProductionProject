import { ThemeSwitcher } from "./ThemeSwitcher";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ background: "var(--inverted-bg-color)" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
