import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTypeTabs } from "../..";

const meta: ComponentMeta<typeof ArticleTypeTabs> = {
  title: `entities/Article/ArticleTypeTabs`,
  component: ArticleTypeTabs,
};

export default meta;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Default = Template.bind({});
Default.args = {};
