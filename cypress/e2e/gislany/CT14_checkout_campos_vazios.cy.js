describe("CT14 - Checkout com campos obrigatórios vazios", () => {
  it("Deve impedir o avanço e informar que o primeiro nome é obrigatório", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Error: First Name is required");

    cy.url().should("include", "/checkout-step-one.html");
  });
});