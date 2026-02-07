import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableProfile } from "./EditableProfile";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testDefaultProfile } from "entities/Profile/model/testData/profile";
import { testUser } from "entities/User/model/constants/tests/user";

const meta: ComponentMeta<typeof EditableProfile> = {
  title: `features/EditableProfile/EditableProfile`,
  component: EditableProfile,
};

export default meta;

const Template: ComponentStory<typeof EditableProfile> = (args) => <EditableProfile {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
LoggedOut.decorators = [StateDecorator({
  profile: {
    data: testDefaultProfile,
    form: testDefaultProfile,
  },
})];

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StateDecorator({
  profile: {
    data: testDefaultProfile,
    form: testDefaultProfile,
  },
  user: {
    authData: testUser,
  },
})];
