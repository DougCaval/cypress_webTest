 Feature: Produtos no Sauce Demo

 Scenario: Visualizar a lista de produtos
    Given que estou logado no Sauce Demo
    When acesso a página de produtos
    Then devo visualizar a lista de produtos disponíveis
    And cada produto deve apresentar nome, preço e imagem

        

  