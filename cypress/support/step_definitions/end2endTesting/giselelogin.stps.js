import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

// Realizar login com usuário e senha válidos
Given("que estou na página de login do Sauce Demo", () => {                                                                      
 cy.visit("https://www.saucedemo.com/");});
When("informo um usuário válido", () => {cy.get('[data-test="username"]').type("standard_user");});
When("informo uma senha válida", () => {cy.get('[data-test="password"]').type("secret_sauce");});
When("clico no botão de login", () => {cy.get('[data-test="login-button"]').click();});
Then("devo ser direcionado para a página de produtos", () => {cy.url().should('include', '/inventory.html');});


// Realizar login com senha inválida
When("informo uma senha inválida", () => {cy.get('[data-test="password"]').type("senhaInvalida");});
Then("devo vizualizar uma mensagem de erro informando que a senha está incorreta", () => {
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
});

// Realizar login com usuário inválido
When("informo um usuário inválido", () => {cy.get('[data-test="username"]').type("usuarioInvalido");});
Then("devo visualizar uma mensagem de erro informando login invalido", () => {
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');});

// Realizar login com campos vazios
Then("devo visualizar uma mensagem informando que o usuário e a senha são obrigatórios", () => {
 cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required');});

 // Realizar login com usuário bloqueado
When("informo o usuário bloqueado", () => {cy.get('[data-test="username"]').type("locked_out_user");});
Then("devo visualizar uma mensagem informando que o usuário está bloqueado", () => {
 cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
});