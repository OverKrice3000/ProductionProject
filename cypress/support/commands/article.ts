import type { Article } from "../../../src/entities/Article/model/types/article";

export type ArticleRaw = Omit<Article, `id` | `user`> & {
  userId: string;
};

export const createArticle = () => {
  return cy.fixture(`article-details`).then((article) => {
    const testArticleWithoutId = {
      ...article,
      userId: article.user.id,
      id: undefined,
      user: undefined,
    } as ArticleRaw;

    return cy
      .request({
        method: `POST`,
        url: `http://localhost:8000/articles`,
        headers: { Authorization: `Auth` },
        body: testArticleWithoutId,
      })
      .then(({ body }) => {
        return body;
      });
  });
};

export const deleteArticle = (articleId: string) => {
  cy.request({
    method: `DELETE`,
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: `Auth` },
  });
};
