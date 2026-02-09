## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook:dev`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

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
