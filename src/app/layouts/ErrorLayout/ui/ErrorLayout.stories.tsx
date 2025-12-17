import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorLayout } from "app/layouts/ErrorLayout";

const meta: ComponentMeta<typeof ErrorLayout> = {
  title: `app/ErrorLayout`,
  component: ErrorLayout,
};

export default meta;

const Template: ComponentStory<typeof ErrorLayout> = () => <ErrorLayout />;

export const Default = Template.bind({});
Default.args = {};
