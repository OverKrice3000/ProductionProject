import type { Meta, StoryObj } from '@storybook/react';

import { UserNotificationsPopover } from './UserNotificationsPopover';
import {
  testNotificationsList,
} from '@/entities/Notification';

const meta: Meta<typeof UserNotificationsPopover> = {
  title: 'features/UserNotificationsPopover',
  component: UserNotificationsPopover,
};

export default meta;

type Story = StoryObj<typeof UserNotificationsPopover>;

export const Default: Story = {
  args: {
    direction: 'bottomLeft',
  },
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
