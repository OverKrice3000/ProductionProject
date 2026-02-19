import { StateDecorator } from "@/app/providers/StateProvider";
import { testArticle, getTestArticlesList } from "@/entities/Article";
import { normalizeData } from "@/shared/utils/redux/normalizeData";
import { getTestCommentsList } from "@/entities/Comment";

import ArticleDetailsPage from "./ArticleDetailsPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleDetailsPage> = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
      comments: {
        ...normalizeData(getTestCommentsList(3), (data) => data.id),
      },
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=&_expand=`,
        method: "GET",
        status: 200,
        response: getTestArticlesList(3),
      },
      {
        url: `${__API__}/article-ratings?userId=&articleId= `,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};

export const Redesigned: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
      comments: {
        ...normalizeData(getTestCommentsList(3), (data) => data.id),
      },
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=&_expand=`,
        method: "GET",
        status: 200,
        response: getTestArticlesList(3),
      },
      {
        url: `${__API__}/article-ratings?userId=&articleId= `,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
