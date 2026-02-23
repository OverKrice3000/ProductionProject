import { StateDecorator } from "@/app/providers/StateProvider";

import { ProfileValidationErrors } from "./ProfileValidationErrors";
import { ValidateProfileError } from "../../model/types/profile";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileValidationErrors> = {
  title: "features/EditableProfile/EditableProfileValidationErrors",
  component: ProfileValidationErrors,
};

export default meta;

type Story = StoryObj<typeof ProfileValidationErrors>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    }),
  ],
};

export const Redesigned: Story = {
  decorators: [
    StateDecorator({
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
