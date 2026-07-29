import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.saucedemo.com";

Given("o usuario esta logado", () => {
  cy.visit(baseUrl);
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

Given("possui ao menos um produto no carrinho", () => {
  cy.get('[data-test^="add-to-cart"]').first().click();
});

Given("esta na pagina de checkout", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="checkout"]').click();
  cy.url().should("include", "/checkout-step-one.html");
});

When("clicar no botao {string}", (buttonName) => {
  if (buttonName === "Cancel") {
    cy.get('[data-test="cancel"]').click();
  }
});

When("clicar em {string}", (buttonName) => {
  if (buttonName === "Continue") {
    cy.get('[data-test="continue"]').click();
  }
});

Then("deve ser redirecionado para a pagina do carrinho", () => {
  cy.url().should("include", "/cart.html");
});

When("preencher o campo {string}", (fieldName) => {
  if (fieldName === "First Name") {
    cy.get('[data-test="firstName"]').type("Cypress");
  }
  if (fieldName === "Last Name") {
    cy.get('[data-test="lastName"]').type("da Silva");
  }
  if (fieldName === "Postal Code") {
    cy.get('[data-test="postalCode"]').type("umdoistresquatrocinco");
  }
});

When("deixar o campo {string} vazio", () => {});

Then("deve ser direcionado para a pagina de overview do pedido", () => {
  cy.url().should("include", "/checkout-step-two.html");
});

Then("deve ser exibida a mensagem {string}", (errorMessage) => {
  cy.get('[data-test="error"]').should("contain", errorMessage);
});