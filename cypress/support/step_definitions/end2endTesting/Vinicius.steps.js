import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

Given("que o usuario esta na tela de login", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("informa usuario e senha valido", () => {
    cy.get(locators.loginPage.usernameInput).type("standard_user");
    cy.get(locators.loginPage.passwordInput).type("secret_sauce");
});

When("clicar no botão ''Entrar''", () => {
    cy.get(locators.loginPage.loginButton).click();
});

Then("o sistema deve permitir o acesso do usuario.", () => {
    cy.url().should("include", "/inventory.html");
    cy.screenshot("login_success");
});