import { StateDecorator } from "@/app/providers/StateProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatarImage from "@/shared/assets/tests/avatar.jpeg";

import ProfilePage from "./ProfilePage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      profile: {
        form: {
          username: "admin",
          age: 22,
          country: Country.Russia,
          lastname: "Klimiuk",
          first: "Igor",
          city: "Novosibirsk",
          currency: Currency.RUB,
          avatar: avatarImage,
        },
      },
    }),
  ],
};

export const Redesigned: Story = {
  decorators: [
    StateDecorator({
      profile: {
        form: {
          username: "admin",
          age: 22,
          country: Country.Russia,
          lastname: "Klimiuk",
          first: "Igor",
          city: "Novosibirsk",
          currency: Currency.RUB,
          avatar: avatarImage,
        },
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
