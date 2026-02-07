import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';

import { ArticlesPageFilters } from "./ArticlesPageFilters";
import { articlesTestState } from "../../model/testData/articlesList";

const meta: ComponentMeta<typeof ArticlesPageFilters> = {
  title: `features/ArticleInfiniteList/ArticlesPageFilters`,
  component: ArticlesPageFilters,
};

export default meta;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  articlesList: {
    ...articlesTestState,
  },
})];
