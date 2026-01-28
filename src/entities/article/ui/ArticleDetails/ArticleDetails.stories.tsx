import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetails } from "./ArticleDetails";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testArticle } from "entities/article/constants/tests/article";

const meta: ComponentMeta<typeof ArticleDetails> = {
  title: `entities/ArticleDetails`,
  component: ArticleDetails,
};

export default meta;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  article: {
    data: testArticle,
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StateDecorator({
  article: {
    isLoading: true,
  },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StateDecorator({
  article: {
    error: `Unexpected error occurred.`,
  },
})];
