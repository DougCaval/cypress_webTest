describe("CT11 - Remover produto do carrinho", () => {
  it("Deve remover o produto do carrinho e atualizar o contador", () => {
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

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get('[data-test="inventory-item-name"]')
      .should("not.exist");

    cy.get('[data-test="shopping-cart-badge"]')
      .should("not.exist");
  });
});