describe("CT13 - Preencher checkout com dados válidos", () => {
  it("Deve avançar para a página de resumo da compra", () => {
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

    cy.url().should("include", "/checkout-step-two.html");

    cy.get('[data-test="title"]')
      .should("be.visible")
      .and("contain", "Checkout: Overview");
  });
});