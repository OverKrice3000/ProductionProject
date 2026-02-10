export const addComment = (text: string) => {
  cy.contains(/comments/i)
    .parents(`section`)
    .find(`form`)
    .find(`input`)
    .type(text);

  cy.contains(/comments/i)
    .parents(`section`)
    .find(`form`)
    .find(`button`)
    .click();
};
