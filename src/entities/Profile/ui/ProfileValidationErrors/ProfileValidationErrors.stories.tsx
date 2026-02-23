import { ProfileValidationErrors } from "./ProfileValidationErrors";
import { ValidateProfileError } from "../../model/types/profile";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileValidationErrors> = {
  title: "entities/Profile/ProfileValidationErrors",
  component: ProfileValidationErrors,
};

export default meta;

type Story = StoryObj<typeof ProfileValidationErrors>;

export const Default: Story = {
  args: {
    validationErrors: [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
    ],
  },
};

export const Redesigned: Story = {
  args: {
    validationErrors: [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA,
    ],
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
