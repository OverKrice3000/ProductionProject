import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import { testUser } from 'entities/User/model/constants/tests/user';

const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {
  args: {
    direction: 'bottomLeft',
  },
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
};
