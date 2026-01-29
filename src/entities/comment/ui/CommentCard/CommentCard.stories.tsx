import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from "./CommentCard";
import { testComment } from "entities/comment/model/constants/tests/comment";

const meta: ComponentMeta<typeof CommentCard> = {
  title: `entities/CommentCard`,
  component: CommentCard,
};

export default meta;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: testComment,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comment: testComment,
};
