import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from "shared/utils/theme/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/decorator/ThemeDecorator";
import { AppModal } from "shared/ui/appModal/AppModal";

const meta: ComponentMeta<typeof AppModal> = {
  title: `shared/AppModal`,
  component: AppModal,
};

export default meta;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Text`,
  isOpen: true,
  targetContainer: document.getElementById(`root`) ?? document.body,
};

export const Dark = Template.bind({});
Dark.args = {
  children: `Text`,
  isOpen: true,
  targetContainer: document.getElementById(`root`) ?? document.body,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
