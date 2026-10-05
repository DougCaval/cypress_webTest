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



// Adicionar múltiplos produtos ao carrinho
When("eu adiciono o primeiro produto ao carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});   
When("eu adiciono o segundo produto ao carrinho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
});  
Then("os dois produtos devem aparecer no carrinho", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]')     
    .should('contain', 'Sauce Labs Bike Light')     
    .and('contain', 'Sauce Labs Bolt T-Shirt');
}); 
Then("o contador do carrinho deve apresentar dois itens", () => {
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '2');
}); 



// Remover um produto do carrinho
Given("que existe um produto no carrinho", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});  
When("eu acesso o carrinho", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
});
When("eu removo o produto do carrinho", () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
}); 
Then("o produto não deve aparecer no carrinho", () => {
    cy.get('[data-test="inventory-item-name"]')
      .should('not.exist');
}); 
Then("o contador do carrinho não deve apresentar itens", () => {
    cy.get('[data-test="shopping-cart-badge"]')
      .should('not.exist');
});



//Validar informações do produto no carrinho
Given("que eu adicionei um produto ao carrinho", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");     
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});
    Given("que existe um produto adicionado ao carrinho", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
});
Then("devo visualizar o nome correto do produto", () => {
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Bike Light');
});
Then("devo visualizar a quantidade correta do produto", () => {
    cy.get('.cart_quantity').should('have.text', '1');
});
Then("devo visualizar o preço correto do produto", () => {
   cy.get('[data-test="inventory-item-price"]').should('have.text', '$9.99');
});