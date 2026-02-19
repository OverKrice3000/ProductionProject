import { StateDecorator } from "@/app/providers/StateProvider";
import { testDefaultProfile } from "@/entities/Profile";
import { testUser } from "@/entities/User";

import { EditableProfile } from "./EditableProfile";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditableProfile> = {
  title: "features/EditableProfile/EditableProfile",
  component: EditableProfile,
};

export default meta;

type Story = StoryObj<typeof EditableProfile>;

export const LoggedOut: Story = {
  decorators: [
    StateDecorator({
      profile: {
        data: testDefaultProfile,
        form: testDefaultProfile,
      },
    }),
  ],
};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      profile: {
        data: testDefaultProfile,
        form: testDefaultProfile,
      },
      user: {
        authData: testUser,
      },
    }),
  ],
};

export const LoggedOutRedesigned: Story = {
  decorators: [
    StateDecorator({
      profile: {
        data: testDefaultProfile,
        form: testDefaultProfile,
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const LoggedInRedesigned: Story = {
  decorators: [
    StateDecorator({
      profile: {
        data: testDefaultProfile,
        form: testDefaultProfile,
      },
      user: {
        authData: testUser,
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
