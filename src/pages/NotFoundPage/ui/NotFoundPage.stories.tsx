import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotFoundPage } from "..";

const meta: ComponentMeta<typeof NotFoundPage> = {
  title: `pages/NotFoundPage`,
  component: NotFoundPage,
};

export default meta;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Default = Template.bind({});
Default.args = {};
