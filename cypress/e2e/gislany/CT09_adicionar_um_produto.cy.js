describe("CT09 - Adicionar um produto ao carrinho", () => {
  it("Deve adicionar o produto ao carrinho e atualizar o contador", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("have.text", "1");

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item-name"]')
      .should("contain", "Sauce Labs Backpack");
  });
});