Feature: Carrinho no Sauce Demo

Scenario: Adicionar um produto ao carrinho
    Given que estou na página de produtos
    When eu adiciono um produto ao carrinho
    Then o produto deve aparecer no carrinho
    And o contador do carrinho deve ser atualizado

   
   
 Scenario: Adicionar múltiplos produtos ao carrinho
    Given que estou na página de produtos
    When eu adiciono o primeiro produto ao carrinho
    And eu adiciono o segundo produto ao carrinho
    Then os dois produtos devem aparecer no carrinho
    And o contador do carrinho deve apresentar dois itens   


Scenario: Remover um produto do carrinho
    Given que existe um produto no carrinho
    When eu acesso o carrinho
    And eu removo o produto do carrinho
    Then o produto não deve aparecer no carrinho
    And o contador do carrinho não deve apresentar itens

    
Scenario: Validar informações do produto no carrinho
    Given que existe um produto adicionado ao carrinho
    When eu acesso o carrinho
    Then devo visualizar o nome correto do produto
    And devo visualizar a quantidade correta do produto
    And devo visualizar o preço correto do produto



