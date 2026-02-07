import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AdminPanelPageSync from "./AdminPanelPage";

const meta: ComponentMeta<typeof AdminPanelPageSync> = {
  title: `pages/AdminPanelPage`,
  component: AdminPanelPageSync,
};

export default meta;

const Template: ComponentStory<typeof AdminPanelPageSync> = () => <AdminPanelPageSync />;

export const Default = Template.bind({});
Default.args = {};
