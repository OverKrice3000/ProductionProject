import { StateDecorator } from "@/app/providers/StateProvider";
import { testArticle } from "@/entities/Article";
import { testUser } from "@/entities/User";

import { EditableArticleDetailsHeader } from "./EditableArticleDetailsHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditableArticleDetailsHeader> = {
  title: "features/EditableArticleDetails/EditableArticleDetailsHeader",
  component: EditableArticleDetailsHeader,
};

export default meta;

type Story = StoryObj<typeof EditableArticleDetailsHeader>;

export const Default: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
    }),
  ],
};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      article: {
        data: testArticle,
      },
      user: {
        authData: testUser,
      },
    }),
  ],
};
