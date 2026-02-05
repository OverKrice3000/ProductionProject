import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppFlex } from "./AppFlex";

const meta: ComponentMeta<typeof AppFlex> = {
  title: `shared/AppFlex`,
  component: AppFlex,
};

export default meta;

const Template: ComponentStory<typeof AppFlex> = (args) => <AppFlex {...args} />;

const text = `Text`;
export const Row = Template.bind({});
Row.args = {
  children: (
      <>
        <div>{text}</div>
          <div>{text}</div>
          <div>{text}</div>
      </>
  ),
};

export const RowGap = Template.bind({});
RowGap.args = {
  gap: `4`,
  children: (
        <>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
        </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: `column`,
  children: (
        <>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
        </>
  ),
};

export const ColumnGap = Template.bind({});
ColumnGap.args = {
  gap: `4`,
  direction: `column`,
  children: (
        <>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
        </>
  ),
};
