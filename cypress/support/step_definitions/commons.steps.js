import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import "../commands";
import { loginPage, inventoryPage, cartPage, checkoutPage, finishPage, menuPage } from '../../support/locators.json';

// LOGIN
Given('que estou na página de login', () => {
  cy.visit('https://www.saucedemo.com/', {
    failOnStatusCode: true,
    retryOnStatusCodeFailure: false,
  });
  Cypress.on('uncaught:exception', () => false);
});

When('eu preencho o usuário {string} e a senha {string}', (usuario, senha) => {
  cy.loginSauceDemo(usuario, senha);
  
});

When('clico em login', () => {
  cy.get(loginPage.loginButton).click();
});

Then('devo ver a página de inventário', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.inventory_container').should('be.visible');
  cy.get('.inventory_item').should('have.length.greaterThan', 0);
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
  cy.get(loginPage.errorMessage).should('be.visible');
  cy.get(loginPage.errorMessage).should('contain', mensagem);
  cy.url().should('not.include', '/inventory.html');
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
  cy.get(menuPage.logoutButton).click();
});

Then('devo ser redirecionado para a página de login', () => {
  cy.url().should('include', '/');
  cy.get(loginPage.loginButton).should('be.visible');
});

// INVENTORY / LISTAGEM DE PRODUTOS
Then('devo ver todos os produtos na listagem', () => {
  cy.get(inventoryPage.inventoryContainer).should('be.visible');
  cy.get(inventoryPage.inventoryItem).should('have.length.greaterThan', 0);
});

Then('a quantidade de produtos deve ser maior que 0', () => {
  cy.get(inventoryPage.inventoryItem).should('have.length.greaterThan', 0);
});

When('eu ordeno os produtos por preço {string}', (ordem) => {
  cy.get(inventoryPage.sortContainer).should('be.visible');
  if (ordem === 'low to high') {
    cy.get(inventoryPage.sortContainer).select('lohi');
  } else if (ordem === 'high to low') {
    cy.get(inventoryPage.sortContainer).select('hilo');
  }
});

Then('os produtos devem estar ordenados por preço crescente', () => {
  cy.get(inventoryPage.inventoryItem).then(($itens) => {
    const precos = [];
    $itens.each((index, element) => {
      const precoTexto = Cypress.$(element).find(inventoryPage.productPrice).text();
      const preco = parseFloat(precoTexto.replace('$', ''));
      precos.push(preco);
    });
    
    for (let i = 0; i < precos.length - 1; i++) {
      expect(precos[i]).to.be.lte(precos[i + 1]);
    }
  });
});

When('eu ordeno os produtos por nome {string}', (ordem) => {
  cy.get(inventoryPage.sortContainer).should('be.visible');
  if (ordem === 'a to z') {
    cy.get(inventoryPage.sortContainer).select('az');
  } else if (ordem === 'z to a') {
    cy.get(inventoryPage.sortContainer).select('za');
  }
});

Then('os produtos devem estar ordenados por nome crescente', () => {
  cy.get(inventoryPage.inventoryItem).then(($itens) => {
    const nomes = [];
    $itens.each((index, element) => {
      const nome = Cypress.$(element).find(inventoryPage.productName).text();
      nomes.push(nome);
    });
    
    for (let i = 0; i < nomes.length - 1; i++) {
      expect(nomes[i].localeCompare(nomes[i + 1])).to.be.lte(0);
    }
  });
});

Then('cada produto deve exibir imagem, nome e preço', () => {
  cy.get(inventoryPage.inventoryItem).each(($item) => {
    cy.wrap($item).find(inventoryPage.productImage).should('be.visible');
    cy.wrap($item).find(inventoryPage.productName).should('be.visible');
    cy.wrap($item).find(inventoryPage.productPrice).should('be.visible');
  });
});
