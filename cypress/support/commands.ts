import { login } from "./commands/login";
import { resetProfile, updateProfile } from "./commands/profile";
import { createArticle, deleteArticle } from "./commands/article";
import { addComment } from "./commands/comments";
import { sendRating } from "./commands/rating";

import type { ArticleRaw } from "./commands/article";
import type { User } from "../../src/entities/User";
import type { Article } from "../../src/entities/Article/model/types/article";

Cypress.Commands.add(`login`, login);
Cypress.Commands.add(`updateProfile`, updateProfile);
Cypress.Commands.add(`resetProfile`, resetProfile);
Cypress.Commands.add(`createArticle`, createArticle);
Cypress.Commands.add(`deleteArticle`, deleteArticle);
Cypress.Commands.add(`addComment`, addComment);
Cypress.Commands.add(`sendRating`, sendRating);

declare global {
  namespace Cypress {
    interface Chainable {
      login: (email?: string, password?: string) => Chainable<User>;
      updateProfile: (firstname: string, lastname: string) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
      createArticle: (article?: ArticleRaw) => Chainable<Article>;
      deleteArticle: (articleId: string) => Chainable<void>;
      addComment: (comment: string) => Chainable<void>;
      sendRating: (rating: number, feedback?: string) => Chainable<void>;
    }
  }
}

export {};
