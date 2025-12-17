import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";
import avatarImage from 'shared/assets/tests/avatar.jpeg';

const meta: ComponentMeta<typeof AppAvatar> = {
  title: `shared/AppAvatar`,
  component: AppAvatar,
};

export default meta;

const Template: ComponentStory<typeof AppAvatar> = (args) => <AppAvatar {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  size: 128,
  src: avatarImage,
};

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
  size: 64,
  src: avatarImage,
};
