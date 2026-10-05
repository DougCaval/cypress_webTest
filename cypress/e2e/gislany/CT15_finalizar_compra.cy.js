describe("CT15 - Finalizar compra com sucesso", () => {
  it("Deve finalizar a compra e apresentar a confirmação", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Gislany");
    cy.get('[data-test="lastName"]').type("Freitas");
    cy.get('[data-test="postalCode"]').type("38400-000");

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.url().should("include", "/checkout-complete.html");

    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("contain", "Thank you for your order!");

    cy.get('[data-test="complete-text"]')
      .should("be.visible");
  });
});