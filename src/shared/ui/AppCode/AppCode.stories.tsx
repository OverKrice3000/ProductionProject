import type { Meta, StoryObj } from '@storybook/react';

import { AppCode } from './AppCode';

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
