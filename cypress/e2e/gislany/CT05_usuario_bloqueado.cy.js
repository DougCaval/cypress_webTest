describe("CT05 - Login com usuário bloqueado", () => {
  it("Deve informar que o usuário está bloqueado", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and(
        "contain",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });
});