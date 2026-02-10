export const updateProfile = (firstname: string, lastname: string) => {
  cy.contains(`button`, /edit/i).click();

  cy.get(`input`).eq(0).clear().type(firstname);
  cy.get(`input`).eq(1).clear().type(lastname);

  cy.contains(`button`, /save/i).click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: `PUT`,
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: `Auth` },
    body: {
      id: `2`,
      username: `user`,
      first: `Boris`,
      lastname: `Popygai`,
      age: 26,
      currency: `USD`,
      country: `Armenia`,
      city: `Novosibirsk`,
      roles: [`USER`],
      password: `123`,
      avatar: `https://cdn-icons-png.flaticon.com/512/7063/7063801.png`,
    },
  });
};
