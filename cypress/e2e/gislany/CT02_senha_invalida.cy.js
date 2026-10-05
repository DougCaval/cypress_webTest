describe("CT02 - Login com senha inválida", () => {
  it("Deve apresentar mensagem de erro ao informar senha inválida", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senhaInvalida");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});