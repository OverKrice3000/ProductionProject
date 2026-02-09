import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfile } from './EditableProfile';
import { StateDecorator } from '@/app/providers/stateProvider/decorator/StateDecorator';
import { testDefaultProfile } from '@/entities/Profile';
import { testUser } from '@/entities/User';

const meta: Meta<typeof EditableProfile> = {
  title: 'features/EditableProfile/EditableProfile',
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
