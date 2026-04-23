Feature: Menu e Logout no SauceDemo

  Scenario: Realizar logout com sucesso e validar redirecionamento para login
    Given que estou logado como "standard_user" com senha "secret_sauce"
    When eu clico no menu e seleciono logout
    Then devo ser redirecionado para a página de login
