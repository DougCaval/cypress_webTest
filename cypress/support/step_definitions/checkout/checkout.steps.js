import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { cartPage, checkoutPage, finishPage, inventoryPage } from '../../support/locators.json';

When('acesso o carrinho sem produtos', () => {
  cy.get(cartPage.cartIcon).click();
});

Given('adiciono um produto ao carrinho', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When('acesso o checkout e preencho os dados corretamente', () => {
  cy.get(cartPage.cartIcon).click();
  cy.get(cartPage.checkoutButton).click();
  cy.get(checkoutPage.firstName).type('John');
  cy.get(checkoutPage.lastName).type('Doe');
  cy.get(checkoutPage.postalCode).type('12345');
  cy.get(checkoutPage.continueButton).click();
});

When('acesso o checkout e clico em continuar sem preencher os dados', () => {
  cy.get(cartPage.cartIcon).click();
  cy.get(cartPage.checkoutButton).click();
  cy.get(checkoutPage.continueButton).click();
});

Then('devo ver o carrinho vazio', () => {
  cy.get('.cart_item').should('not.exist');
});

Then('devo ver a tela de resumo da compra', () => {
  cy.get('.summary_total_label').should('be.visible');
  cy.get('.inventory_item_name').should('be.visible');
});

Then('devo ver uma mensagem de erro', () => {
  cy.get('[data-test="error"]').should('be.visible');
});

Then('devo ver o nome do produto o preco e as taxas', () => {
  cy.get('.inventory_item_name').should('be.visible');
  cy.get('.summary_total_label').should('be.visible');
});