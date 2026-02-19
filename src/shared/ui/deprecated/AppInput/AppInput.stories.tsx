import { AppInput } from "./AppInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppInput> = {
  title: "shared/deprecated/AppInput",
  component: AppInput,
};

export default meta;

type Story = StoryObj<typeof AppInput>;

export const Default: Story = {
  args: {
    value: "Text",
    placeholder: "Enter text",
  },
};
