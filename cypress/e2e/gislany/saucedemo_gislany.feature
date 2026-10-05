Feature: Automação E2E Sauce Demo - Gislany

  Scenario: CT01 - Login com usuário e senha válidos
    Given que acesso a página de login do Sauce Demo para o CT01
    When informo o usuário válido do CT01
    And informo a senha válida do CT01
    And clico no botão de login do CT01
    Then devo acessar a página de produtos no CT01