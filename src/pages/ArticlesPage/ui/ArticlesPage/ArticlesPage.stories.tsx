import { StateDecorator } from "@/app/providers/StateProvider";
import { articlesTestState } from "@/features/ArticleInfiniteList";

import ArticlesPage from "./ArticlesPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      articlesList: {
        ...articlesTestState,
      },
    }),
  ],
};

export const Empty: Story = {};
