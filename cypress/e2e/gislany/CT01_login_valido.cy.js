describe("CT01 - Login com usuário e senha válidos", () => {
  it("Deve direcionar o usuário para a página de produtos", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
  });
});