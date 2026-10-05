describe("CT04 - Login com campos vazios", () => {
  it("Deve informar que o usuário é obrigatório", () => {
    cy.visit("/");

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Epic sadface: Username is required");
  });
});