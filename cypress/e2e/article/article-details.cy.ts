let articleId: string;

describe(`Article details tests`, () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.createArticle().then((article) => {
        articleId = article.id;
        cy.visit(`/articles/${articleId}`);
      });
    });
  });

  afterEach(() => {
    cy.deleteArticle(articleId);
  });

  it(`Article details load correctly`, () => {
    cy.contains(/Javascript news/i).should(`exist`);
    cy.contains(/1022/i).should(`exist`);
    cy.contains(/26.02.2022/i).should(`exist`);
  });

  it(`Article recommendations load correctly`, () => {
    cy.contains(/recommendation/i)
      .parents(`aside`)
      .find(`a`)
      .should(`have.length`, 4);
  });

  it(`User sends comment`, () => {
    cy.contains(/comments/i)
      .parents(`section`)
      .scrollIntoView();
    cy.addComment(`comment`);
    cy.contains(/comments/i)
      .parents(`section`)
      .find(`li`)
      .should(`have.length`, 1);
  });

  it(`User sends rating`, () => {
    cy.contains(/rate/i).parents(`aside`).scrollIntoView();
    cy.sendRating(4, `feedback`);
    cy.contains(/thank/i)
      .parents(`aside`)
      .find(`svg`)
      .filter((_, el) => window.getComputedStyle(el).fill !== `none`)
      .should(`have.length`, 4);
  });
});
