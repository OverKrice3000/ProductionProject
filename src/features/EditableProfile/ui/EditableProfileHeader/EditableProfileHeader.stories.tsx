import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableProfileHeader } from "./EditableProfileHeader";

const meta: ComponentMeta<typeof EditableProfileHeader> = {
  title: `features/EditableProfileHeader`,
  component: EditableProfileHeader,
};

export default meta;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) =>
    <EditableProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
