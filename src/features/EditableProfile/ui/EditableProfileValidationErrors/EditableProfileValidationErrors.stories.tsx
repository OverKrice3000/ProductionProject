import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableProfileValidationErrors } from "./EditableProfileValidationErrors";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { ValidateProfileError } from "../../model/types/editableProfile";

const meta: ComponentMeta<typeof EditableProfileValidationErrors> = {
  title: `features/EditableProfile/EditableProfileValidationErrors`,
  component: EditableProfileValidationErrors,
};

export default meta;

const Template: ComponentStory<typeof EditableProfileValidationErrors> = (args) =>
    <EditableProfileValidationErrors {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  profile: {
    validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USER_DATA],
  },
})];
