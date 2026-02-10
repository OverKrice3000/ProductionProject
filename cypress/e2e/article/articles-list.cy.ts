describe(`Articles list tests`, () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`/articles`);
    });
  });

  it(`Articles list loads correctly`, () => {
    cy.get(`section`)
      .should(`exist`)
      .children()
      .should(`have.length.greaterThan`, 3);
  });

  // TODO search and others
});
