import { ThemeSwitcher } from "./ThemeSwitcher";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "features/ThemeSwitcher",
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  decorators: [
    (Story: StoryFn) => (
      <div style={{ background: "var(--inverted-bg-color)" }}>
        <Story />
      </div>
    ),
  ],
};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
