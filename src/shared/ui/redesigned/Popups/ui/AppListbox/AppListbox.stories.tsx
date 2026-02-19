import { action } from "@storybook/addon-actions";

import { AppListbox } from "./AppListbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppListbox> = {
  title: "shared/redesigned/Popups/AppListbox",
  component: AppListbox,
  decorators: [
    (Story) => (
      <div style={{ padding: "200px 100px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
  args: {
    defaultValue: "Select value",
    onChange: action("onChangeListboxItem"),
    items: [
      {
        value: "First",
        content: "FirstFirstFirstFirst",
      },
      {
        value: "Second",
        content: "SecondSecondSecondSecond",
        disabled: true,
      },
      {
        value: "Third",
        content: "ThirdThirdThirdThird",
      },
    ],
    value: "Third",
  },
};

export default meta;

type Story = StoryObj<typeof AppListbox>;

export const BottomLeft: Story = {
  args: {
    direction: "bottomLeft",
  },
};

export const BottomRight: Story = {
  args: {
    direction: "bottomRight",
  },
};

export const TopLeft: Story = {
  args: {
    direction: "topLeft",
  },
};

export const TopRight: Story = {
  args: {
    direction: "topRight",
  },
};

export const RightTop: Story = {
  args: {
    direction: "rightTop",
  },
};

export const RightBottom: Story = {
  args: {
    direction: "rightBottom",
  },
};

export const LeftTop: Story = {
  args: {
    direction: "leftTop",
  },
};

export const LeftBottom: Story = {
  args: {
    direction: "leftBottom",
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};
