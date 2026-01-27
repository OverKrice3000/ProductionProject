import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesPage from "pages/ArticlesPage/ui/ArticlesPage/ArticlesPage";

const meta: ComponentMeta<typeof ArticlesPage> = {
  title: `/ArticlesPage`,
  component: ArticlesPage,
};

export default meta;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage/>;

export const Default = Template.bind({});
Default.args = {};
