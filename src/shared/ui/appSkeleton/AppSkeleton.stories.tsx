import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppSkeleton } from "./AppSkeleton";

const meta: ComponentMeta<typeof AppSkeleton> = {
  title: `shared/AppSkeleton`,
  component: AppSkeleton,
};

export default meta;

const Template: ComponentStory<typeof AppSkeleton> = (args) => <AppSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: `100%`,
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: `50%`,
  width: 100,
  height: 100,
};
