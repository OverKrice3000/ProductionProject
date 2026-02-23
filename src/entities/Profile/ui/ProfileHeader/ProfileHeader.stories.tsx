import { ProfileHeader } from "./ProfileHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileHeader> = {
  title: "features/EditableProfile/EditableProfileHeader",
  component: ProfileHeader,
};

export default meta;

type Story = StoryObj<typeof ProfileHeader>;

export const Default: Story = {};

export const Redesigned: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
