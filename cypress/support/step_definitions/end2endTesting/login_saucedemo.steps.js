import { Given, When, Then , And } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página de login", () => {
  cy.visit("https://www.saucedemo.com/");
});


Given("que estou na página de login no SauceDemo", () => {
  cy.visit("https://www.saucedemo.com/");
 
});


When("eu informo um usuário válido", () => {
  cy.get('[data-test="username"]').type("standard_user");
});


When("eu informo uma senha válida", () => {
  cy.get('[data-test="password"]').type("secret_sauce");
});


When("eu clico no botão de login", () => {
  cy.get('[data-test="login-button"]').click();
});


When("eu informo uma senha inválida", () => {
  cy.get('[data-test="password"]').type("senha_incorreta");
});

Then("devo visualizar uma mensagem de erro de login", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", "Epic sadface");
});

When("eu informo um usuário inválido", () => {
  cy.get('[data-test="username"]').type("usuario_invalido");
});

Then("devo visualizar uma mensagem informando que o usuário é obrigatório", () => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", "Username is required");
});

When("eu informo o usuário bloqueado", () => {
  cy.get('[data-test="username"]').type("locked_out_user");
});

