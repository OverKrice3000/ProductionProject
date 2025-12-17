import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from "widgets/Sidebar";

const meta: ComponentMeta<typeof Sidebar> = {
  title: `widgets/Sidebar`,
  component: Sidebar,
};

export default meta;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
