import "./commands";

Cypress.on(`window:before:load`, () => {
  window.localStorage.setItem(`i18nextLng`, `en`);
});
