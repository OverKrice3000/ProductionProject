import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileValidationErrors } from './EditableProfileValidationErrors';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import { ValidateProfileError } from '../../model/types/editableProfile';

const meta: Meta<typeof EditableProfileValidationErrors> = {
  title: 'features/EditableProfile/EditableProfileValidationErrors',
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
