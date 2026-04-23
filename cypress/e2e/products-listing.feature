#language: pt
Funcionalidade: HOME / LISTAGEM DE PRODUTOS
  Como um cliente
  Quero visualizar, ordenar e validar os produtos disponíveis
  Para fazer uma escolha informada de compra

  Contexto: Usuário logado na página de inventário
    Dado que estou logado como "standard_user" com senha "secret_sauce"

  Cenário: Validar exibição de todos os produtos
    Então devo visualizar todos os produtos na listagem
    E todos os produtos devem exibir imagem, nome e preço

  Cenário: Ordenar produtos por preço (menor → maior)
    Quando eu seleciono a opção de ordenação "Price (low to high)"
    Então os produtos devem estar ordenados por preço em ordem crescente

  Cenário: Ordenar produtos por nome (A → Z)
    Quando eu seleciono a opção de ordenação "Name (A to Z)"
    Então os produtos devem estar ordenados por nome em ordem alfabética crescente

  Cenário: Validar exibição de imagem, nome e preço de cada item
    Então cada item deve ter imagem visível
    E cada item deve ter nome visível
    E cada item deve ter preço visível
