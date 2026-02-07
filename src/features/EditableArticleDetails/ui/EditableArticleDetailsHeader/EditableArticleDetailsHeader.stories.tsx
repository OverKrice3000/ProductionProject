import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableArticleDetailsHeader } from "./EditableArticleDetailsHeader";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testArticle } from "entities/Article";
import { testUser } from "entities/User/model/constants/tests/user";

const meta: ComponentMeta<typeof EditableArticleDetailsHeader> = {
  title: `features/EditableArticleDetails/EditableArticleDetailsHeader`,
  component: EditableArticleDetailsHeader,
};

export default meta;

const Template: ComponentStory<typeof EditableArticleDetailsHeader> = (args) => <EditableArticleDetailsHeader {...args} />;

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
