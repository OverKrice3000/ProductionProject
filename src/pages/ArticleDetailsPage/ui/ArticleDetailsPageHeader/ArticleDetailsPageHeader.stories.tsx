import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

const meta: ComponentMeta<typeof ArticleDetailsPageHeader> = {
  title: `pages/ArticleDetailsPageHeader`,
  component: ArticleDetailsPageHeader,
};

export default meta;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
