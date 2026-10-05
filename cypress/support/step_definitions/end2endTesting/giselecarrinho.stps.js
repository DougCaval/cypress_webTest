import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

// Adicionar produto ao carrinho
When("eu adiciono um produto ao carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});
Then("o produto deve aparecer no carrinho", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]')
      .should('contain', 'Sauce Labs Bike Light');
});
Then("o contador do carrinho deve ser atualizado", () => {
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '1');
});