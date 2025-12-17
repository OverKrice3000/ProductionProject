import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
import avatarImage from 'shared/assets/tests/avatar.jpeg';

const meta: ComponentMeta<typeof ProfileCard> = {
  title: `entities/ProfileCard`,
  component: ProfileCard,
};

export default meta;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    username: `admin`,
    age: 22,
    country: Country.Russia,
    lastname: `Klimiuk`,
    first: `Igor`,
    city: `Novosibirsk`,
    currency: Currency.RUB,
    avatar: avatarImage,
  },
};

export const WithLoadingError = Template.bind({});
WithLoadingError.args = {
  loadingError: `ProfileLoadingError`,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
