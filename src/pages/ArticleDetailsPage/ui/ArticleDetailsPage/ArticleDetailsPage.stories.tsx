import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleDetailsPage from "pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage";

const meta: ComponentMeta<typeof ArticleDetailsPage> = {
  title: `/ArticleDetailsPage`,
  component: ArticleDetailsPage,
};

export default meta;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage/>;

export const Default = Template.bind({});
Default.args = {};
