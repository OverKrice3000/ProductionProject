import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '..';
import { StateDecorator } from '@/app/providers/stateProvider/decorator/StateDecorator';
import { testUser } from '@/entities/User';
import { testNotificationsList } from '@/entities/Notification';

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
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: testNotificationsList,
      },
    ],
  },
};
