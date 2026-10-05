Feature: Checkout no Sauce Demo


Scenario: Preencher checkout com dados válidos
    Given que existe um produto no carrinho
    And eu estou na página do carrinho
    When eu avanço para o checkout
    And eu informo o primeiro nome
    And eu informo o sobrenome
    And eu informo o código postal
    And eu clico em continuar
    Then devo ser direcionado para a página de resumo da compra


Scenario: Validar checkout com campos obrigatórios vazios
    Given que existe um produto no carrinho
    And eu estou na página de informações do checkout
    When eu clico em continuar
    Then devo visualizar uma mensagem informando que o primeiro nome é obrigatório


Scenario: Finalizar uma compra com sucesso
    Given que existe um produto no carrinho
    And eu estou na página de resumo da compra
    When eu clico no botão de finalizar compra
    Then devo visualizar a mensagem de confirmação da compra
    And devo visualizar a mensagem de pedido concluído