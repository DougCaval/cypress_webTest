Feature: Carrinho no Sauce Demo

Scenario: Adicionar um produto ao carrinho
    Given que estou na página de produtos
    When eu adiciono um produto ao carrinho
    Then o produto deve aparecer no carrinho
    And o contador do carrinho deve ser atualizado