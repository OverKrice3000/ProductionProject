import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from "widgets/Sidebar";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testUser } from "entities/user/model/constants/tests/user";

const meta: ComponentMeta<typeof Sidebar> = {
  title: `widgets/Sidebar`,
  component: Sidebar,
};

export default meta;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StateDecorator({
  user: {
    authData: testUser,
  },
})];
