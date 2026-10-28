import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from '../../locators.json';



describe('Sauce Demo - 15 Cenários de Teste E2E', () => {

  const baseUrl = 'https://www.saucedemo.com/';

  context('Funcionalidade: Login no Sauce Demo', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
    });

    // CT01
    it('Realizar login com usuário e senha válidos', () => {
      cy.get(locators.login.username).type('standard_user');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
      cy.url().should('include', '/inventory.html');
    });


    // CT02
    it('Realizar login com senha inválida', () => {
      cy.get(locators.login.username).type('standard_user');
      cy.get(locators.login.password).type('senha_errada');
      cy.get(locators.login.loginButton).click();
      cy.get(locators.login.error).should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    // CT03
    it('Realizar login com usuário inválido', () => {
      cy.get(locators.login.username).type('usuario_errado');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
      cy.get(locators.login.error).should('be.visible').and('contain', 'Username and password do not match');
    });

    // CT04
    it('Realizar login com campos vazios', () => {
      cy.get(locators.login.loginButton).click();
      cy.get(locators.login.error).should('be.visible').and('contain', 'Username is required');
    });

    // CT05
    it('Realizar login com usuário bloqueado', () => {
      cy.get(locators.login.username).type('locked_out_user');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
      cy.get(locators.login.error).should('be.visible').and('contain', 'Sorry, this user has been locked out');
    });
  });

  context('Funcionalidade: Produtos e Ordenação no Sauce Demo', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.get(locators.login.username).type('standard_user');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
    });

    // CT06
    it('Visualizar a lista de produtos', () => {
      cy.get('.inventory_list').should('be.visible');
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).find('.inventory_item_name').should('be.visible');
        cy.wrap($el).find('.inventory_item_price').should('be.visible');
        cy.wrap($el).find('img.inventory_item_img').should('be.visible');
      });
    });

    // CT07
    it('Ordenar produtos por preço crescente', () => {
      cy.get('[data-test="product-sort-container"]').select('lohi');
      cy.get('.inventory_item_price').first().should('contain', '$7.99');
    });

    // CT08
    it('Ordenar produtos por preço decrescente', () => {
      cy.get('[data-test="product-sort-container"]').select('hilo');
      cy.get('.inventory_item_price').first().should('contain', '$49.99');
    });
  });

  context('Funcionalidade: Carrinho no Sauce Demo', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.get(locators.login.username).type('standard_user');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
    });

    // CT09
    it('Adicionar um produto ao carrinho', () => {
      cy.get(locators.login.addToCart).click();
      cy.get(locators.login.cartBadge).should('have.text', '1');
    });

    // CT10
    it('Adicionar múltiplos produtos ao carrinho', () => {
      cy.get(locators.login.addToCart).click();
      cy.get(locators.login.addToCart2).click();
      cy.get(locators.login.cartBadge).should('have.text', '2');
    });

    // CT11
    it('Remover um produto do carrinho', () => {
      // Pré-condição: Adicionar produto
      cy.get(locators.login.addToCart).click();
      
      // Aceder ao carrinho e remover
      cy.get(locators.login.cart).click();
      cy.get(locators.login.removeButton).click();
      
      // Validações
      cy.get(locators.login.cartItem).should('not.exist');
      cy.get(locators.login.cartBadge).should('not.exist');
    });

    // CT12
    it('Validar informações do produto no carrinho', () => {
      // Pré-condição: Adicionar produto específico
      cy.get(locators.login.addToCart).click();
      
      // Aceder ao carrinho
      cy.get(locators.login.cart).click();
      
      // Validar informações
      cy.get(locators.login.cartItemName).should('have.text', 'Sauce Labs Backpack');
      cy.get(locators.login.cartItemQuantity).should('have.text', '1');
      cy.get(locators.login.cartItemPrice).should('contain', '$29.99');
    });
  });

  context('Funcionalidade: Checkout e Finalização da compra', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.get(locators.login.username).type('standard_user');
      cy.get(locators.login.password).type('secret_sauce');
      cy.get(locators.login.loginButton).click();
      
      // Pré-condição para testes de checkout: ter produto no carrinho e estar na página de checkout
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
    });

    // CT13
    it('Preencher checkout com dados válidos', () => {
      cy.get('[data-test="firstName"]').type('João');
      cy.get('[data-test="lastName"]').type('Silva');
      cy.get('[data-test="postalCode"]').type('1000-001');
      cy.get('[data-test="continue"]').click();
      
      // Valida se avançou para o resumo
      cy.url().should('include', '/checkout-step-two.html');
    });

    // CT14
    it('Validar checkout com campos obrigatórios vazios', () => {
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="error"]').should('be.visible').and('contain', 'First Name is required');
    });

    // CT15
    it('Finalizar uma compra com sucesso', () => {
      // Passar a primeira etapa do checkout
      cy.get('[data-test="firstName"]').type('João');
      cy.get('[data-test="lastName"]').type('Silva');
      cy.get('[data-test="postalCode"]').type('1000-001');
      cy.get('[data-test="continue"]').click();
      
      // Finalizar a compra
      cy.get('[data-test="finish"]').click();
      
      // Validar conclusão
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });

    //cucumber apartir daqui


  Given('que estou na página de login do Sauce Demo', () => {
    cy.visit(baseUrl);
  });
  When('preencho o campo de usuário com {string}', (username) => {
    cy.get(locators.login.username).type(username);
  });
  When('preencho o campo de senha com {string}', (password) => {
    cy.get(locators.login.password).type(password);
  });
  Then('clico no botão de login', () => {
    cy.get(locators.login.loginButton).click();
  
  }); 



  });

});