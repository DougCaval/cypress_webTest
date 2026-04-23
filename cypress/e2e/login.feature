Feature: Login no SauceDemo

  Scenario: Login com usuário válido
    Given que estou na página de login
    When eu preencho o usuário "standard_user" e a senha "secret_sauce"
    And clico em login
    Then devo ver a página de inventário

  Scenario: Login com senha inválida
    Given que estou na página de login
    When eu preencho o usuário "standard_user" e a senha "senha_errada"
    And clico em login
    Then devo ver a mensagem de erro "Username and password do not match"

  Scenario: Login com usuário bloqueado
    Given que estou na página de login
    When eu preencho o usuário "locked_out_user" e a senha "secret_sauce"
    And clico em login
    Then devo ver a mensagem de erro "Sorry, this user has been locked out"

  Scenario: Login com campos vazios (validação de erro)
    Given que estou na página de login
    When clico em login
    Then devo ver a mensagem de erro "Username is required"
