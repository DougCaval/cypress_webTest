describe("CT12 - Validar informações do produto no carrinho", () => {
  it("Deve apresentar nome, quantidade e preço corretos do produto", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item-name"]')
      .should("be.visible")
      .and("have.text", "Sauce Labs Backpack");

    cy.get('[data-test="item-quantity"]')
      .should("be.visible")
      .and("have.text", "1");

    cy.get('[data-test="inventory-item-price"]')
      .should("be.visible")
      .and("have.text", "$29.99");
  });
});