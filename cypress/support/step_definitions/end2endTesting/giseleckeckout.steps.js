import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";


// Preencher checkout com dados válidos
When("eu estou na página do carrinho", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
});
When("eu avanço para o checkout", () => {
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
});     
When("eu informo o primeiro nome", () => {
    cy.get('[data-test="firstName"]').type("Gisele");
}); 
When("eu informo o sobrenome", () => {
    cy.get('[data-test="lastName"]').type("Eckert");
});
When("eu informo o código postal", () => {
    cy.get('[data-test="postalCode"]').type("12345");
});
When("eu clico em continuar", () => {
    cy.get('[data-test="continue"]').click();
});
Then("devo ser direcionado para a página de resumo da compra", () => {
    cy.url().should('include', '/checkout-step-two.html');
});



//Validar checkout com campos obrigatórios vazios
Given("eu estou na página de informações do checkout", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
});
Then("devo visualizar uma mensagem informando que o primeiro nome é obrigatório", () => {
    cy.get('[data-test="error"]')
      .should('contain', 'Error: First Name is required');
});



//Finalizar uma compra com sucesso
Given("eu estou na página de resumo da compra", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Gisele");
    cy.get('[data-test="lastName"]').type("Eckert");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
});
When("eu clico no botão de finalizar compra", () => {
    cy.get('[data-test="finish"]').click();
});
Then("devo visualizar a mensagem de confirmação da compra", () => {
    cy.get('[data-test="complete-header"]')
      .should('contain', 'Thank you for your order!');
});
Then("devo visualizar a mensagem de pedido concluído", () => {
    cy.get('[data-test="complete-text"]')
      .should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});

