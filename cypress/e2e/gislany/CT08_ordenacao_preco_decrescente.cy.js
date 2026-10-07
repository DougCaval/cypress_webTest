describe("CT08 - Ordenação por preço decrescente", () => {
  it("Deve ordenar os produtos do maior para o menor preço", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="product-sort-container"]').select("hilo");

    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const precos = [...$precos].map((preco) =>
        Number(preco.innerText.replace("$", ""))
      );

      const precosOrdenados = [...precos].sort((a, b) => b - a);

      expect(precos).to.deep.equal(precosOrdenados);
    });
  });
});