import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from "./ProfileCard";
import { testDefaultProfile } from "../../model/constants/tests/profile";

const meta: ComponentMeta<typeof ProfileCard> = {
  title: `entities/ProfileCard`,
  component: ProfileCard,
};

export default meta;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: testDefaultProfile,
};

export const WithLoadingError = Template.bind({});
WithLoadingError.args = {
  loadingError: `ProfileLoadingError`,
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
