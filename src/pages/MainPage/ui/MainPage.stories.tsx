import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPageSync from "pages/MainPage/ui/MainPage";

const meta: ComponentMeta<typeof MainPageSync> = {
  title: `pages/MainPage`,
  component: MainPageSync,
};

export default meta;

const Template: ComponentStory<typeof MainPageSync> = () => <MainPageSync />;

export const Default = Template.bind({});
Default.args = {};
