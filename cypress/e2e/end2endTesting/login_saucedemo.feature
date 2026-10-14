
Feature: Login no SauceDemo

Scenario: Realizar login com usuário e senha válidos
Given que estou na página de login no SauceDemo
When eu informo um usuário válido
And eu informo uma senha válida
And eu clico no botão de login
Then devo ser direcionado para a página de produtos

Scenario: Realizar login com senha inválida
Given que estou na página de login do Sauce Demo
When eu informo um usuário válido
And eu informo uma senha inválida
And eu clico no botão de login
Then devo visualizar uma mensagem de erro de login

Scenario: Realizar login com usuário inválido
Given que estou na página de login do Sauce Demo
When eu informo um usuário inválido
And eu informo uma senha válida
And eu clico no botão de login
Then devo visualizar uma mensagem de erro de login

Scenario: Realizar login com campos vazios
Given que estou na página de login do Sauce Demo
When eu clico no botão de login
Then devo visualizar uma mensagem informando que o usuário é obrigatório

Scenario: Realizar login com usuário bloqueado
Given que estou na página de login do Sauce Demo
When eu informo o usuário bloqueado
And eu informo uma senha válida
And eu clico no botão de login
Then devo visualizar uma mensagem informando que o usuário está bloqueado



