Feature: Fluxo Completo de Compra no SauceDemo

  Scenario: Fluxo completo: login → adicionar produto → checkout → sucesso
    Given que estou na página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    And adiciono o produto "Sauce Labs Backpack" ao carrinho
    And finalizo a compra com os dados:
      | nome     | sobrenome | cep     |
      | Carlos   | Teste     | 12345-000 |
    Then devo ver a mensagem de sucesso "Thank you for your order!"

  Scenario: Fluxo com múltiplos produtos no carrinho
    Given que estou na página de login
    When eu faço login com usuário "standard_user" e senha "secret_sauce"
    And adiciono os produtos:
      | produto                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light  |
    And finalizo a compra com os dados:
      | nome     | sobrenome | cep     |
      | Carlos   | Teste     | 12345-000 |
    Then devo ver a mensagem de sucesso "Thank you for your order!"
