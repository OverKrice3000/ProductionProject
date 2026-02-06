import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppDropdown } from "./AppDropdown";
import { AppButton } from "../appButton/AppButton";

const meta: ComponentMeta<typeof AppDropdown> = {
  title: `shared/AppDropdown`,
  component: AppDropdown,
  decorators: [
    (Story) => <div style={{ padding: `200px` }}><Story /></div>,
  ],
  args: {
    trigger: <AppButton>{`Open`}</AppButton>,
    items: [
      {
        content: `First`,
      },
      {
        content: `Second`,
      },
      {
        content: `Third`,
      },
    ],
  },
};

export default meta;

const Template: ComponentStory<typeof AppDropdown> = (args) => <AppDropdown {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: `bottomLeft`,
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: `bottomRight`,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: `topLeft`,
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: `topRight`,
};

export const RightTop = Template.bind({});
RightTop.args = {
  direction: `rightTop`,
};

export const RightBottom = Template.bind({});
RightBottom.args = {
  direction: `rightBottom`,
};

export const LeftTop = Template.bind({});
LeftTop.args = {
  direction: `leftTop`,
};

export const LeftBottom = Template.bind({});
LeftBottom.args = {
  direction: `leftBottom`,
};
