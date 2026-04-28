// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('highlight', { prevSubject: true }, (subject) => {
  // aplica estilo no elemento
  cy.wrap(subject).then(($el) => {
    $el.css('outline', '3px solid red');
    $el.css('transition', 'outline 0.2s ease-in-out');
  });
  return cy.wrap(subject);
});
Cypress.Commands.add('removeHighlight', { prevSubject: true }, (subject) => {
  // remove estilo do elemento
  cy.wrap(subject).then(($el) => {
    $el.css('outline', 'none');
  });
  return cy.wrap(subject);
});

// Comando para login no SauceDemo
Cypress.Commands.add('loginSauceDemo', (username, password) => {
  
   cy.visit('https://www.saucedemo.com');
  Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

// Comando para verificar se está logado
Cypress.Commands.add('shouldBeLoggedIn', () => {
  cy.get('.inventory_container').should('be.visible');
});

// Comando para logout
Cypress.Commands.add('logoutSauceDemo', () => {
  cy.get('[data-test="open-menu"]').click();
  cy.get('[data-test="logout-sidebar-link"]').click();
});