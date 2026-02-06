import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleComments } from "./ArticleComments";

const meta: ComponentMeta<typeof ArticleComments> = {
  title: `/ArticleComments`,
  component: ArticleComments,
};

export default meta;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Default = Template.bind({});
Default.args = {};
