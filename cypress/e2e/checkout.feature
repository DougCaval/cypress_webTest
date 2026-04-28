# language: pt

Funcionalidade: Checkout no sistema da Swag Labs

  Cenario: Iniciar checkout com carrinho vazio
    Dado que estou logado como "standard_user" com senha "secret_sauce"
    Quando acesso o carrinho sem produtos
    Entao devo ver o carrinho vazio

  Cenario: Preencher dados obrigatorios corretamente
    Dado que estou logado como "standard_user" com senha "secret_sauce"
    E adiciono um produto ao carrinho
    Quando acesso o checkout e preencho os dados corretamente
    Entao devo ver a tela de resumo da compra

  Cenario: Validar erro ao nao preencher campos obrigatorios
    Dado que estou logado como "standard_user" com senha "secret_sauce"
    E adiciono um produto ao carrinho
    Quando acesso o checkout e clico em continuar sem preencher os dados
    Entao devo ver uma mensagem de erro

  Cenario: Finalizar compra com sucesso
    Dado que estou logado como "standard_user" com senha "secret_sauce"
    E adiciono um produto ao carrinho
    Quando finalizo a compra com os dados:
      | nome | sobrenome | cep   |
      | John | Doe       | 12345 |
    Entao devo ver a mensagem de sucesso "Thank you for your order!"

  Cenario: Validar resumo da compra
    Dado que estou logado como "standard_user" com senha "secret_sauce"
    E adiciono um produto ao carrinho
    Quando acesso o checkout e preencho os dados corretamente
    Entao devo ver o nome do produto o preco e as taxas
