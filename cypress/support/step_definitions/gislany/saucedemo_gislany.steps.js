import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login do Sauce Demo para o CT01", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("informo o usuário válido do CT01", () => {
  cy.get('[data-test="username"]').type("standard_user");
});

When("informo a senha válida do CT01", () => {
  cy.get('[data-test="password"]').type("secret_sauce");
});

When("clico no botão de login do CT01", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("devo acessar a página de produtos no CT01", () => {
  cy.url().should("include", "/inventory.html");
});