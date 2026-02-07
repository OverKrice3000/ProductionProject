import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetails } from "./ArticleDetails";
import { testArticle } from "../../model/testData/article";

const meta: ComponentMeta<typeof ArticleDetails> = {
  title: `entities/Article/ArticleDetails`,
  component: ArticleDetails,
};

export default meta;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  article: testArticle,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: `Unexpected error occurred.`,
};
