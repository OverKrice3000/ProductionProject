import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { testHrefNotification, testNotification } from '../../model/testData/notification';

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
};

export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {
  args: {
    notification: testNotification,
  },
};

export const Href: Story = {
  args: {
    notification: testHrefNotification,
  },
};
