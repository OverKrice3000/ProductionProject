import { testArticle } from "../../../src/entities/Article/model/testData/article";

import type { Article } from "../../../src/entities/Article/model/types/article";

export type ArticleRaw = Omit<Article, `id` | `user`> & {
  userId: string;
};

const testArticleWithoutId: ArticleRaw = {
  ...testArticle,
  userId: testArticle.user.id,
  id: undefined,
  user: undefined,
} as ArticleRaw;

export const createArticle = (article: ArticleRaw = testArticleWithoutId) => {
  return cy
    .request({
      method: `POST`,
      url: `http://localhost:8000/articles`,
      headers: { Authorization: `Auth` },
      body: article,
    })
    .then(({ body }) => {
      return body;
    });
};

export const deleteArticle = (articleId: string) => {
  cy.request({
    method: `DELETE`,
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: `Auth` },
  });
};
