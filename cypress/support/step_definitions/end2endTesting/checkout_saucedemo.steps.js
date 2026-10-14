import { Given, When, Then , And } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

// CT13 — Preencher checkout com dados válidos



Then("devo ser direcionado para a página do resumo da compra", () => {
  cy.url().should("include", "/checkout-step-two.html");

  cy.get(".checkout_summary_container").should("be.visible");
});

// CT14 — Checkout com campos obrigatórios vazios

