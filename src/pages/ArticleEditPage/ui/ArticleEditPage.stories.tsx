import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleEditPage from "./ArticleEditPage";

const meta: ComponentMeta<typeof ArticleEditPage> = {
  title: `pages/ArticleEditPage`,
  component: ArticleEditPage,
};

export default meta;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
