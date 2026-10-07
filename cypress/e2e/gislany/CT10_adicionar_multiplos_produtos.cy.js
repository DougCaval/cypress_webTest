describe("CT10 - Adicionar múltiplos produtos ao carrinho", () => {
  it("Deve adicionar dois produtos ao carrinho e atualizar o contador", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "2");

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item"]').should("have.length", 2);

    cy.contains('[data-test="inventory-item-name"]', "Sauce Labs Backpack")
      .should("be.visible");

    cy.contains('[data-test="inventory-item-name"]', "Sauce Labs Bike Light")
      .should("be.visible");
  });
});