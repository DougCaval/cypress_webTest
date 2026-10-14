import { Given, When, Then , And } from "@badeball/cypress-cucumber-preprocessor";


Given("que estou na página de login", () => {
  cy.visit("https://www.saucedemo.com/");
});

// CT09 — Adicionar um produto ao carrinho

When("adiciono um produto ao carrinho", () => {
  cy.get(".inventory_item")
    .first()
    .find("button")
    .click();
});

Then("um produto deve aparecer no carrinho", () => {
  cy.get(".shopping_cart_link").click();

  cy.get(".cart_item").should("have.length", 1);
});

Then("a quantidade de produtos no carrinho deve ser atualizada", () => {
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

// CT10 — Adicionar múltiplos produtos ao carrinho

When("eu adiciono o 1° produto ao carrinho", () => {
  cy.get(".inventory_item").eq(0).find("button").click();
});

When("eu adiciono o 2° produto ao carrinho", () => {
  cy.get(".inventory_item").eq(1).find("button").click();
});

Then("todos os produtos adicionados devem aparecer no carrinho", () => {
  cy.get(".shopping_cart_link").click();

  cy.get(".cart_item").should("have.length", 2);
});

Then("o contador do carrinho deve apresentar mais de um item", () => {
  cy.get(".shopping_cart_badge").should("have.text", "2");
});

// CT11 — Remover produto do carrinho



When("removo o produto do carrinho", () => {
  cy.get(".cart_item").find("button").click();
});

Then("o produto vai sumir do carrinho", () => {
  cy.get(".cart_item").should("not.exist");
});

Then("o contador do carrinho não apresenta itens", () => {
  cy.get(".shopping_cart_badge").should("not.exist");
});

// CT12 — Validar informações do produto no carrinho

