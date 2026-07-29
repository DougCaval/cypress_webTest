Feature: Checkout

  Background:
    Given o usuario esta logado
    And possui ao menos um produto no carrinho
    And esta na pagina de checkout

  Scenario: Cancelar checkout - volta para o carrinho
    When clicar no botao "Cancel"
    Then deve ser redirecionado para a pagina do carrinho

  Scenario: Checkout com dados validos - vai para a pagina de overview
    When preencher o campo "First Name"
    And preencher o campo "Last Name"
    And preencher o campo "Postal Code"
    And clicar em "Continue"
    Then deve ser direcionado para a pagina de overview do pedido

  Scenario: Checkout sem nome - mensagem de erro
    When preencher o campo "Last Name"
    And preencher o campo "Postal Code"
    And deixar o campo "First Name" vazio
    And clicar em "Continue"
    Then deve ser exibida a mensagem "Error: First Name is required"

  Scenario: Checkout sem sobrenome - mensagem de erro
    When preencher o campo "First Name"
    And preencher o campo "Postal Code"
    And deixar o campo "Last Name" vazio
    And clicar em "Continue"
    Then deve ser exibida a mensagem "Error: Last Name is required"

  Scenario: Checkout sem CEP - mensagem de erro
    When preencher o campo "First Name"
    And preencher o campo "Last Name"
    And deixar o campo "Postal Code" vazio
    And clicar em "Continue"
    Then deve ser exibida a mensagem "Error: Postal Code is required"
