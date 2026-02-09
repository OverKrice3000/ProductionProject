import { NotificationList } from "./NotificationList";
import {
  getTestHrefNotificationsList,
  getTestGeneralNotificationsList,
} from "../../model/testData/notification";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NotificationList> = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {
  args: {
    notifications: [
      ...getTestGeneralNotificationsList(2),
      ...getTestHrefNotificationsList(2, 2),
    ],
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};
