import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

// Visualizar lista de produtos
Given("que estou logado no Sauce Demo", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();});
When("acesso a página de produtos", () => {
  cy.url().should('include', '/inventory.html'); 
 });
 Then("devo visualizar a lista de produtos disponíveis", () => {
  cy.get('[data-test="inventory-list"]').should('be.visible');
 });
 When("cada produto deve apresentar nome, preço e imagem", () => {
  cy.get('[data-test="inventory-list"]').each(($produto) => {
  cy.wrap($produto).find('[data-test="inventory-item-name"]').should('be.visible');
  cy.wrap($produto).find('[data-test="inventory-item-price"]').should('be.visible');
  cy.wrap($produto).find('.inventory_item_img').should('be.visible');
  });
 });