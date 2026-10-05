 Feature: Produtos no Sauce Demo

 Scenario: Visualizar a lista de produtos
    Given que estou logado no Sauce Demo
    When acesso a página de produtos
    Then devo visualizar a lista de produtos disponíveis
    And cada produto deve apresentar nome, preço e imagem


 Scenario: Ordenar produtos por preço crescente
    Given que estou na página de produtos
    When seleciono a ordenação por preço crescente
    Then os produtos devem ser apresentados do menor para o maior preço


Scenario: Ordenar produtos por preço decrescente
    Given que estou na página de produtos
    When eu seleciono a ordenação por preço decrescente
    Then os produtos devem ser apresentados do maior para o menor preço

  