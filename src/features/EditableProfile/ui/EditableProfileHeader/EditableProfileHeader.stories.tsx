import { EditableProfileHeader } from "./EditableProfileHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditableProfileHeader> = {
  title: "features/EditableProfile/EditableProfileHeader",
  component: EditableProfileHeader,
};

export default meta;

type Story = StoryObj<typeof EditableProfileHeader>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
