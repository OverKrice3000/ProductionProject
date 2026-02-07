import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';

import { EditableArticleDetails } from "./EditableArticleDetails";
import { testArticle } from "entities/Article";
import { testUser } from 'entities/User/model/constants/tests/user';

const meta: ComponentMeta<typeof EditableArticleDetails> = {
  title: `features/EditableArticleDetails/EditableArticleDetails`,
  component: EditableArticleDetails,
};

export default meta;

const Template: ComponentStory<typeof EditableArticleDetails> = (args) => <EditableArticleDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  article: {
    data: testArticle,
  },
})];

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [StateDecorator({
  article: {
    data: testArticle,
  },
  user: {
    authData: testUser,
  },
})];

export const IsLoading = Template.bind({});
IsLoading.args = {};
IsLoading.decorators = [StateDecorator({
  article: {
    isLoading: true,
  },
})];
