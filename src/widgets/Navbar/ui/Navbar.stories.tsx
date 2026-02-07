import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '..';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import { testUser } from 'entities/User/model/constants/tests/user';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
};
