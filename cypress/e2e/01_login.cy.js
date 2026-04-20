describe('🔐 LOGIN - Módulo 1', () => {
  const loginPageSelectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('1. Login com usuário válido (standard_user)', () => {
    cy.get(loginPageSelectors.username).type('standard_user');
    cy.get(loginPageSelectors.password).type('secret_sauce');
    cy.get(loginPageSelectors.loginButton).click();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_container').should('be.visible');
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('2. Login com senha inválida', () => {
    cy.get(loginPageSelectors.username).type('standard_user');
    cy.get(loginPageSelectors.password).type('senha_errada');
    cy.get(loginPageSelectors.loginButton).click();

    cy.get(loginPageSelectors.errorMessage).should('be.visible');
    cy.get(loginPageSelectors.errorMessage).should('contain', 'Username and password do not match');
    cy.url().should('not.include', '/inventory.html');
  });

  it('3. Login com usuário bloqueado (locked_out_user)', () => {
    cy.get(loginPageSelectors.username).type('locked_out_user');
    cy.get(loginPageSelectors.password).type('secret_sauce');
    cy.get(loginPageSelectors.loginButton).click();

    cy.get(loginPageSelectors.errorMessage).should('be.visible');
    cy.get(loginPageSelectors.errorMessage).should('contain', 'Sorry, this user has been locked out');
    cy.url().should('not.include', '/inventory.html');
  });

  it('4. Login com campos vazios (validação de erro)', () => {
    cy.get(loginPageSelectors.loginButton).click();

    cy.get(loginPageSelectors.errorMessage).should('be.visible');
    cy.get(loginPageSelectors.errorMessage).should('contain', 'Username is required');
    cy.url().should('not.include', '/inventory.html');
  });
});
