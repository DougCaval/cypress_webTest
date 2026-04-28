Feature: Home / Listagem de Produtos

  Background:
    Given que estou na página de login
    And eu preencho o usuário "standard_user" e a senha "secret_sauce"
    Then devo ver a página de inventário

  Scenario: Validar exibição de todos os produtos
    Then devo ver todos os produtos na listagem
    And a quantidade de produtos deve ser maior que 0

  Scenario: Ordenar produtos por preço (menor → maior)
    When eu ordeno os produtos por preço "low to high"
    Then os produtos devem estar ordenados por preço crescente

  Scenario: Ordenar produtos por nome (A → Z)
    When eu ordeno os produtos por nome "a to z"
    Then os produtos devem estar ordenados por nome crescente

  Scenario: Validar exibição de imagem, nome e preço de cada item
    Then cada produto deve exibir imagem, nome e preço