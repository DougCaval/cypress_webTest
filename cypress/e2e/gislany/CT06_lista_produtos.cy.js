describe("CT06 - Exibição da lista de produtos", () => {
  it("Deve exibir os produtos com nome, preço e imagem", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");

    cy.get('[data-test="inventory-item"]').should("have.length.greaterThan", 0);

    cy.get('[data-test="inventory-item"]').each(($produto) => {
      cy.wrap($produto)
        .find('[data-test="inventory-item-name"]')
        .should("be.visible");

      cy.wrap($produto)
        .find('[data-test="inventory-item-price"]')
        .should("be.visible");

      cy.wrap($produto)
        .find("img")
        .should("be.visible");
    });
  });
});