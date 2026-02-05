import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from "..";

const meta: ComponentMeta<typeof Loader> = {
  title: `widgets/Loader`,
  component: Loader,
};

export default meta;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};
