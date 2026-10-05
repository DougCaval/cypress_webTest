describe("CT07 - Ordenação por preço crescente", () => {
  it("Deve ordenar os produtos do menor para o maior preço", () => {
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="product-sort-container"]').select("lohi");

    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const precos = [...$precos].map((preco) =>
        Number(preco.innerText.replace("$", ""))
      );

      const precosOrdenados = [...precos].sort((a, b) => a - b);

      expect(precos).to.deep.equal(precosOrdenados);
    });
  });
});