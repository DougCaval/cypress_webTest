 Feature: Login no Sauce Demo

  Scenario:  Realizar login com usuário e senha válidos
    Given que estou na página de login do Sauce Demo
    When informo um usuário válido
    And  informo uma senha válida
    And  clico no botão de login
    Then devo ser direcionado para a página de produtos



  Scenario: Realizar login com senha inválida
    Given que estou na página de login do Sauce Demo
    When informo um usuário válido
    And informo uma senha inválida 
    And clico no botão de login
    Then devo vizualizar uma mensagem de erro informando que a senha está incorreta


 Scenario: Realizar login com usuário inválido
    Given que estou na página de login do Sauce Demo
    When informo um usuário inválido
    And informo uma senha válida
    And clico no botão de login
    Then devo visualizar uma mensagem de erro informando login invalido


Scenario: Realizar login com campos vazios
    Given que estou na página de login do Sauce Demo
    When clico no botão de login
    Then devo visualizar uma mensagem informando que o usuário e a senha são obrigatórios


Scenario: Realizar login com usuário bloqueado
    Given que estou na página de login do Sauce Demo
    When informo o usuário bloqueado
    And informo uma senha válida
    And clico no botão de login
    Then devo visualizar uma mensagem informando que o usuário está bloqueado