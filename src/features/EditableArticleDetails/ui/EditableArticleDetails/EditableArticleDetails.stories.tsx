import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableArticleDetails } from "./EditableArticleDetails";

const meta: ComponentMeta<typeof EditableArticleDetails> = {
  title: `/EditableArticleDetails`,
  component: EditableArticleDetails,
};

export default meta;

const Template: ComponentStory<typeof EditableArticleDetails> = (args) => <EditableArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
