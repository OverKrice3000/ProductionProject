import { AppCode } from './AppCode';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppCode> = {
  title: 'shared/AppCode',
  component: AppCode,
};

export default meta;

type Story = StoryObj<typeof AppCode>;

export const Default: Story = {
  args: {
    text: `export default meta;

type story = storyObj<>

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;`,
  },
};
