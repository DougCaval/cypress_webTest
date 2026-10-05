describe("CT03 - Login com usuário inválido", () => {
  it("Deve apresentar mensagem de erro ao informar usuário inválido", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("usuarioInvalido");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});