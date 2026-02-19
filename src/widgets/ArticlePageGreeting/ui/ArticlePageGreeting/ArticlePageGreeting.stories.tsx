import { StateDecorator } from "@/app/providers/StateProvider";
import { testUser } from "@/entities/User";
import { testNotificationsList } from "@/entities/Notification";

import { ArticlePageGreeting } from "./ArticlePageGreeting";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlePageGreeting> = {
  title: "widgets/ArticlePageGreeting",
  component: ArticlePageGreeting,
};

export default meta;

type Story = StoryObj<typeof ArticlePageGreeting>;

export const Default: Story = {
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
        url: `${__API__}/users/${testUser.id}`,
        method: "PATCH",
        status: 200,
        response: testNotificationsList,
      },
    ],
  },
};

export const Redesigned: Story = {
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
        url: `${__API__}/users/${testUser.id}`,
        method: "PATCH",
        status: 200,
        response: testNotificationsList,
      },
    ],
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
