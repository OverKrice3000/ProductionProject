import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from "widgets/Navbar";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testUser } from "entities/user/model/constants/tests/user";

const meta: ComponentMeta<typeof Navbar> = {
  title: `widgets/Navbar`,
  component: Navbar,
};

export default meta;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StateDecorator({
  user: {
    authData: testUser,
  },
})];
