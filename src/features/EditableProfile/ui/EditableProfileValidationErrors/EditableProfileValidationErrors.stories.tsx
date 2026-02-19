import { StateDecorator } from "@/app/providers/StateProvider";

import { EditableProfileValidationErrors } from "./EditableProfileValidationErrors";
import { ValidateProfileError } from "../../model/types/editableProfile";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditableProfileValidationErrors> = {
  title: "features/EditableProfile/EditableProfileValidationErrors",
  component: EditableProfileValidationErrors,
};

export default meta;

type Story = StoryObj<typeof EditableProfileValidationErrors>;

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
