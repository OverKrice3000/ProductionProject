import { testNotificationsList } from "@/entities/Notification";

import { UserNotificationsPopover } from "./UserNotificationsPopover";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UserNotificationsPopover> = {
  title: "features/UserNotificationsPopover",
  component: UserNotificationsPopover,
};

export default meta;

type Story = StoryObj<typeof UserNotificationsPopover>;

export const Default: Story = {
  args: {
    direction: "bottomLeft",
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: testNotificationsList,
      },
    ],
  },
};
