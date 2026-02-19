import { NotificationItem } from "./NotificationItem";
import {
  testHrefNotification,
  testNotification,
} from "../../model/testData/notification";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NotificationItem> = {
  title: "entities/Notification/NotificationItem",
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

export const Redesigned: Story = {
  args: {
    notification: testNotification,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export const HrefRedesigned: Story = {
  args: {
    notification: testHrefNotification,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
