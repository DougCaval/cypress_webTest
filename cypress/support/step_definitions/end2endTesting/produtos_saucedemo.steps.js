import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("eu acesso a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

Given("que estou logado na página de produtos", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();

  cy.url().should("include", "/inventory.html");
});


When("eu ordeno os produtos por preço crescente", () => {
  cy.get('[data-test="product-sort-container"]')
    .select("lohi");
});

Then("os produtos devem aparecer do menor para o maior preço", () => {
  cy.get('[data-test="inventory-item-price"]')
    .then(($precos) => {
      const precos = [...$precos].map((item) =>
        Number(item.innerText.replace("$", ""))
      );

      expect(precos).to.deep.equal(
        [...precos].sort((a, b) => a - b)
      );
    });
});


When("eu ordeno os produtos por preço decrescente", () => {
  cy.get('[data-test="product-sort-container"]')
    .select("hilo");
});

Then("os produtos devem aparecer do maior para o menor preço", () => {
  cy.get('[data-test="inventory-item-price"]')
    .then(($precos) => {
      const precos = [...$precos].map((item) =>
        Number(item.innerText.replace("$", ""))
      );

      expect(precos).to.deep.equal(
        [...precos].sort((a, b) => b - a)
      );
    });
});