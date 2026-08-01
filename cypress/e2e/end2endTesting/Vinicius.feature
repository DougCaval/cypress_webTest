Feature: Login Page

  Scenario: Login com sucesso usuário padrão e senha correta
    Given que o usuario esta na tela de login
    When informa usuario e senha valido
    And clicar no botão ''Entrar''
    Then o sistema deve permitir o acesso do usuario.