let userId: string;

describe(`Profile tests`, () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`/profile/${data.id}`);
      userId = data.id;
    });
  });

  afterEach(() => {
    cy.resetProfile(userId);
  });

  it(`Profile loads correctly`, () => {
    cy.get(`main`)
      .contains(/profile/i)
      .get(`section`)
      .should(`exist`)
      .get(`input`)
      .first()
      .invoke(`val`)
      .should(`match`, /boris/i);

    cy.get(`label`)
      .eq(0)
      .invoke(`text`)
      .should(`match`, /first name/i);
    cy.get(`label`)
      .eq(1)
      .invoke(`text`)
      .should(`match`, /last name/i);
  });

  it(`User edits profile`, () => {
    cy.updateProfile(`new firstname`, `new lastname`);

    cy.get(`input`).eq(0).should(`have.value`, `new firstname`);
    cy.get(`input`).eq(1).should(`have.value`, `new lastname`);

    cy.reload();

    cy.get(`input`).eq(0).should(`have.value`, `new firstname`);
    cy.get(`input`).eq(1).should(`have.value`, `new lastname`);
  });
});
