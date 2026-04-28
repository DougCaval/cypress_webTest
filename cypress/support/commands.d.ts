/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    loginSauceDemo(
      username: string,
      password: string
    ): Chainable<void>;

    shouldBeLoggedIn(): Chainable<void>;
  }
}