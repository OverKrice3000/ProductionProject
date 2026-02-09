## Запуск проекта

```
npm install - устанавливаем зависимости
npm run dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run dev:frontend` - Запуск frontend проекта на webpack dev server
- `npm run dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run dev:server` - Запуск backend сервера
- `npm run build:dev` - Сборка в dev режиме
- `npm run build:prod` - Сборка в prod режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером с автоисправлением
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером с автоисправлением
  `npm run lint` - Одновременный запуск линтеров для всех файлов
- `npm run lint:fix` - Одновременный запуск линтеров для всех файлов с автоисправлением
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook:dev` - Запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - Инициализация husky
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](./docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-fsd-paths-check*,
который содержит 3 правила
1) enforce-relative-path-within-slice - запрещает использовать абсолютные импорты в рамках одного модуля. Имеет auto fix
2) forbid-imports-from-upper-slices - проверяет корректность использования слоев с точки зрения FSD
   (например, запрещает импорт из вышележащих слоев)
3) enforce-public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером с автоисправлением
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером с автоисправлением
- `npm run lint` - Одновременный запуск всех линтеров
- `npm run lint:fix` - Одновременный запуск всех линтеров с автоисправлением

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook:dev`

Подробнее о [Storybook](./docs/storybook.md)

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


----

## Конфигурация проекта

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](./src/shared/api/rtkApi/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется хук
[useReducer](./src/shared/utils/hooks/useReducer.ts)

----
