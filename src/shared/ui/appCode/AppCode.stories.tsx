import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppCode } from "./AppCode";

const meta: ComponentMeta<typeof AppCode> = {
  title: `shared/AppCode`,
  component: AppCode,
};

export default meta;

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: `export default meta;

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;`,
};
