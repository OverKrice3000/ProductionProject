import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from "./CommentList";

const meta: ComponentMeta<typeof CommentList> = {
  title: `/CommentList`,
  component: CommentList,
};

export default meta;

const Template: ComponentStory<typeof CommentList> = () => <CommentList comments={[]} />;

export const Default = Template.bind({});
Default.args = {};
