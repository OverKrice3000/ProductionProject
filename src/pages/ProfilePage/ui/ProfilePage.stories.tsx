import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { StateDecorator } from '@/app/providers/stateProvider/decorator/StateDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatarImage from '@/shared/assets/tests/avatar.jpeg';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Russia,
          lastname: 'Klimiuk',
          first: 'Igor',
          city: 'Novosibirsk',
          currency: Currency.RUB,
          avatar: avatarImage,
        },
      },
    }),
  ],
};
