Feature: Carrinho de compras

  Scenario: Adicionar um produto ao carrinho
    Given que estou logado como "standard_user" com senha "secret_sauce"
    When adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then o badge do carrinho deve mostrar "1"

  Scenario: Remover produto do carrinho
    Given que estou logado como "standard_user" com senha "secret_sauce"
    And adiciono o produto "Sauce Labs Backpack" ao carrinho
    When eu acesso o carrinho
    And removo o produto "Sauce Labs Backpack" do carrinho
    Then o badge do carrinho não deve estar visível
    And não devo ver o produto "Sauce Labs Backpack" no carrinho

  Scenario: Validar contador do carrinho (badge)
    Given que estou logado como "standard_user" com senha "secret_sauce"
    When adiciono os produtos:
      | produto                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light |
    Then o badge do carrinho deve mostrar "2"

  Scenario: Acessar carrinho e validar itens adicionados
    Given que estou logado como "standard_user" com senha "secret_sauce"
    And adiciono os produtos:
      | produto                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light |
    When eu acesso o carrinho
    Then devo ver os itens no carrinho:
      | produto                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light |
