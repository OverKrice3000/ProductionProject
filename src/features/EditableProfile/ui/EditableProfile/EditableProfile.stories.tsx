import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableProfile } from "./EditableProfile";

const meta: ComponentMeta<typeof EditableProfile> = {
  title: `/EditableProfile`,
  component: EditableProfile,
};

export default meta;

const Template: ComponentStory<typeof EditableProfile> = (args) => <EditableProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
