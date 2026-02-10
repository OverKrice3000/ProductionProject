export const sendRating = (rating: number, feedback?: string) => {
  cy.contains(/rate/i)
    .parents(`aside`)
    .find(`[role=button]`)
    .eq(rating - 1)
    .click();

  feedback &&
    cy
      .contains(/feedback/i)
      .parents(`[role=dialog]`)
      .find(`input`)
      .type(feedback);

  feedback
    ? cy
        .contains(/feedback/i)
        .parents(`[role=dialog]`)
        .contains(`button`, /submit/i)
        .click()
    : cy
        .contains(/feedback/i)
        .parents(`[role=dialog]`)
        .contains(`button`, /cancel/i)
        .click();
};
