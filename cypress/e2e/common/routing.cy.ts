describe(`Routing e2e tests`, () => {
  describe(`User authorized`, () => {
    beforeEach(() => {
      cy.login();
    });

    it(`Go to profile page`, () => {
      cy.visit(`/profile/1`);
      cy.get(`main`)
        .should(`exist`)
        .contains(/profile/i);
    });

    it(`Go to articles page`, () => {
      cy.visit(`/articles`);
      cy.get(`main`).should(`exist`);
      cy.get(`[role="search"]`).should(`exist`);
    });
  });

  describe(`User not authorized`, () => {
    it(`Go to main page`, () => {
      cy.visit(`/`);
      cy.get(`main`).should(`exist`).contains(/main/i);
    });
    it(`Go to profile page`, () => {
      cy.visit(`/profile/1`);
      cy.get(`main`).should(`exist`).contains(/main/i);
    });
    it(`Go to non existent page page`, () => {
      cy.visit(`/thisroutedoesnotexist/1`);
      cy.get(`main`)
        .should(`exist`)
        .contains(/not found/i);
    });
  });
});
