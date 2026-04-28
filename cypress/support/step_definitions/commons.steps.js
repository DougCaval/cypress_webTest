import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


// LOGIN
Given('que estou na página de login', () => {
  cy.visit('https://www.saucedemo.com/', {
    failOnStatusCode: true,
    retryOnStatusCodeFailure: false,
  });
  Cypress.on('uncaught:exception', () => false);
});


When('eu preencho o usuário {string} e a senha {string}', (usuario, senha) => {
  cy.get(loginPage.username).clear().type(usuario);
  cy.get(loginPage.password).clear().type(senha);
});

When('clico em login', () => {
  cy.get(loginPage.loginButton).click();
});


Then('devo ver a página de inventário', () => {
  cy.url().should('include', '/inventory.html');
  cy.get(inventoryPage.inventoryContainer).should('be.visible');
  cy.get(inventoryPage.inventoryItem).should('have.length.greaterThan', 0);
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
  cy.get(loginPage.errorMessage).should('be.visible');
  cy.get(loginPage.errorMessage).should('contain', mensagem);
  cy.url().should('not.include', '/inventory.html');
  // Após erro, o botão de login deve estar visível
  cy.get(loginPage.loginButton).should('be.visible');
});

// FLUXO E2E
When('eu faço login com usuário {string} e senha {string}', (usuario, senha) => {
  cy.get(loginPage.username).type(usuario);
  cy.get(loginPage.password).type(senha);
  cy.get(loginPage.loginButton).click();
});

When('adiciono o produto {string} ao carrinho', (produto) => {
  cy.contains('.inventory_item', produto).find('button').click();
});

When('adiciono os produtos:', (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.contains('.inventory_item', row.produto).find('button').click();
  });
});

When('eu acesso o carrinho', () => {
  cy.get(cartPage.cartIcon).click();
});

When('removo o produto {string} do carrinho', (produto) => {
  cy.contains(cartPage.cartItem, produto).find('button').click();
});

Then('o badge do carrinho deve mostrar {string}', (quantidade) => {
  cy.get(cartPage.cartBadge).should('have.text', quantidade);
});

Then('o badge do carrinho não deve estar visível', () => {
  cy.get('body').then(($body) => {
    if ($body.find(cartPage.cartBadge).length) {
      cy.get(cartPage.cartBadge).should('not.be.visible');
    } else {
      expect($body.find(cartPage.cartBadge).length).to.equal(0);
    }
  });
});

Then('devo ver os itens no carrinho:', (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.contains(cartPage.cartItem, row.produto).should('be.visible');
  });
});

Then('não devo ver o produto {string} no carrinho', (produto) => {
  cy.get(cartPage.cartItem).should('not.contain', produto);
});

When('finalizo a compra com os dados:', (dataTable) => {
  cy.get(cartPage.cartIcon).click();
  cy.get(cartPage.checkoutButton).click();
  const dados = dataTable.hashes()[0];
  cy.get(checkoutPage.firstName).type(dados.nome);
  cy.get(checkoutPage.lastName).type(dados.sobrenome);
  cy.get(checkoutPage.postalCode).type(dados.cep);
  cy.get(checkoutPage.continueButton).click();
  cy.get(checkoutPage.finishButton).click();
});

Then('devo ver a mensagem de sucesso {string}', (mensagem) => {
  cy.get(finishPage.successMessage).should('contain', mensagem);
});

// MENU / LOGOUT
Given('que estou logado como {string} com senha {string}', (usuario, senha) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get(loginPage.username).type(usuario);
  cy.get(loginPage.password).type(senha);
  cy.get(loginPage.loginButton).click();
});

When('eu clico no menu e seleciono logout', () => {
  cy.get(menuPage.menuButton).click();
  cy.get('.bm-menu').should('be.visible');
  cy.get(menuPage.logoutButton).should('be.visible').click();
});

When('faço logout', () => {
  cy.wait(500); // Wait for page to stabilize after checkout
  cy.get(menuPage.menuButton).should('be.visible').click();
  cy.get('.bm-menu').should('be.visible');
  cy.get(menuPage.logoutButton).should('be.visible').click();
});

Then('devo ser redirecionado para a página de login', () => {
  cy.url().should('include', '/');
  cy.get(loginPage.loginButton).should('be.visible');
});

// LISTAGEM DE PRODUTOS
Then('devo visualizar todos os produtos na listagem', () => {
  cy.get(productsListingPage.inventoryItemsList).should('be.visible');
  cy.get(productsListingPage.inventoryItem).should('have.length.greaterThan', 0);
});

Then('todos os produtos devem exibir imagem, nome e preço', () => {
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemImg).should('be.visible');
    cy.wrap($item).find(productsListingPage.inventoryItemName).should('be.visible');
    cy.wrap($item).find(productsListingPage.inventoryItemPrice).should('be.visible');
  });
});

When('eu seleciono a opção de ordenação {string}', (opcaoOrdenacao) => {
  cy.get(productsListingPage.sortContainer).select(opcaoOrdenacao);
});

Then('os produtos devem estar ordenados por preço em ordem crescente', () => {
  const precos = [];
  
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemPrice).then(($price) => {
      const priceText = $price.text().replace('$', '');
      precos.push(parseFloat(priceText));
    });
  }).then(() => {
    const precosOrdenados = [...precos].sort((a, b) => a - b);
    expect(precos).to.deep.equal(precosOrdenados);
  });
});

Then('os produtos devem estar ordenados por nome em ordem alfabética crescente', () => {
  const nomes = [];
  
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemName).then(($name) => {
      nomes.push($name.text());
    });
  }).then(() => {
    const nomesOrdenados = [...nomes].sort((a, b) => a.localeCompare(b));
    expect(nomes).to.deep.equal(nomesOrdenados);
  });
});

Then('cada item deve ter imagem visível', () => {
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemImg).should('be.visible');
  });
});

Then('cada item deve ter nome visível', () => {
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemName).should('be.visible');
  });
});

Then('cada item deve ter preço visível', () => {
  cy.get(productsListingPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(productsListingPage.inventoryItemPrice).should('be.visible');
  });
});