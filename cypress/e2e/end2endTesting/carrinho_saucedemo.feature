Feature: Carrinho no Sauce Demo
Scenario: Adicionar um produto ao carrinho
Given que estou na página de produtos
When adiciono um produto ao carrinho
Then um produto deve aparecer no carrinho
And a quantidade de produtos no carrinho deve ser atualizada

Scenario: Adicionar múltiplos produtos ao carrinho
Given que estou na página de produtos
When eu adiciono o 1° produto ao carrinho
And eu adiciono o 2° produto ao carrinho
Then todos os produtos adicionados devem aparecer no carrinho
And o contador do carrinho deve apresentar mais de um item

Scenario: Remover um produto do carrinho
Given que existe um produto no carrinho
When eu acesso o carrinho
And removo o produto do carrinho
Then o produto vai sumir do carrinho
And o contador do carrinho não apresenta itens


Scenario: Validar informações do produto no carrinho
Given que existe um produto adicionado ao carrinho
When eu acesso o carrinho
Then devo visualizar o nome correto do produto
And devo visualizar a quantidade correta do produto
And devo visualizar o preço correto do produto


Scenario: Finalizar uma compra com sucesso
Given que existe um produto no carrinho
And eu estou na página de resumo da compra
When eu clico no botão de finalizar compra
Then devo visualizar a mensagem de confirmação da compra
And devo visualizar a mensagem de pedido concluído