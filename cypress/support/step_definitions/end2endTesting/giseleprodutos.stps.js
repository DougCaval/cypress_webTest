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


 //Ordenar produtos por preço crescente
 Given("que estou na página de produtos", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html'); 
 });
 When("seleciono a ordenação por preço crescente", () => {
  cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
 });
 Then("os produtos devem ser apresentados do menor para o maior preço", () => {
  cy.get('[data-test="inventory-list"]').then(($produtos) => {
  const precos = $produtos.find('[data-test="inventory-item-price"]').map((index, el) => parseFloat(el.innerText.replace('$', ''))).get();
  const precosOrdenados = [...precos].sort((a, b) => a - b);
  expect(precos).to.deep.equal(precosOrdenados);
  });
 });    


 //Ordenar produtos por preço decrescente
 When("eu seleciono a ordenação por preço decrescente", () => {
  cy.get('[data-test="product-sort-container"]').select('Price (high to low)');
 });
 Then("os produtos devem ser apresentados do maior para o menor preço", () => {
  cy.get('[data-test="inventory-list"]').then(($produtos) => {
  const precos = $produtos.find('[data-test="inventory-item-price"]').map((index, el) => parseFloat(el.innerText.replace('$', ''))).get();
  const precosOrdenados = [...precos].sort((a, b) => b - a);
  expect(precos).to.deep.equal(precosOrdenados);
  });
 });    
