import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileHeader } from './EditableProfileHeader';

const meta: Meta<typeof EditableProfileHeader> = {
  title: 'features/EditableProfile/EditableProfileHeader',
  component: EditableProfileHeader,
};

export default meta;

type Story = StoryObj<typeof EditableProfileHeader>;

export const Default: Story = {};
