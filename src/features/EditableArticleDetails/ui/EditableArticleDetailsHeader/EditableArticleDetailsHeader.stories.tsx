import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableArticleDetailsHeader } from "./EditableArticleDetailsHeader";

const meta: ComponentMeta<typeof EditableArticleDetailsHeader> = {
  title: `features/EditableArticleDetailsHeader`,
  component: EditableArticleDetailsHeader,
};

export default meta;

const Template: ComponentStory<typeof EditableArticleDetailsHeader> = (args) => <EditableArticleDetailsHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
