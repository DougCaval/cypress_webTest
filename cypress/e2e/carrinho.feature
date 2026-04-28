Feature: Carrinho de Compras

  Scenario: Adicionar um produto ao carrinho
    Given que estou logado como "standard_user" com senha "secret_sauce"
    When eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then devo ver o produto no carrinho

  Scenario: Remover produto do carrinho
    Given que estou logado como "standard_user" com senha "secret_sauce"
    And eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    When eu removo o produto do carrinho
    Then devo ver o carrinho vazio

  Scenario: Validar contador do carrinho (badge)
    Given que estou logado como "standard_user" com senha "secret_sauce"
    When eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then devo ver o contador do carrinho mostrando "1"

  Scenario: Acessar carrinho e validar itens adicionados
    Given que estou logado como "standard_user" com senha "secret_sauce"
    And eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    When eu acesso o carrinho
    Then devo ver o produto "Sauce Labs Backpack" na página do carrinho