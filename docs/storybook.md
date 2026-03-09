## Storybook

For each component in the project, story cases are documented.
Server requests are mocked using `storybook-addon-mock`.

Story case files are created alongside the component with the `.stories.tsx` extension.

Start Storybook with the command:
- `npm run storybook:dev`

Example:

```typescript jsx
import { AppAvatar } from './AppAvatar';
import avatarImage from '../../assets/tests/avatar.jpeg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppAvatar> = {
  title: 'shared/AppAvatar',
  component: AppAvatar,
};

export default meta;

type Story = StoryObj<typeof AppAvatar>;

export const Avatar: Story = {
  args: {
    size: 128,
    src: avatarImage,
  },
};

export const AvatarSmall: Story = {
  args: {
    size: 64,
    src: avatarImage,
  },
};
```
