import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from "pages/ProfilePage/ui/ProfilePage";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import avatarImage from "shared/assets/tests/avatar.jpeg";

const meta: ComponentMeta<typeof ProfilePage> = {
  title: `pages/ProfilePage`,
  component: ProfilePage,
};

export default meta;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StateDecorator({
    profile: {
      form: {
        username: `admin`,
        age: 22,
        country: Country.Russia,
        lastname: `Klimiuk`,
        first: `Igor`,
        city: `Novosibirsk`,
        currency: Currency.RUB,
        avatar: avatarImage,
      },
    },
  }),
];
