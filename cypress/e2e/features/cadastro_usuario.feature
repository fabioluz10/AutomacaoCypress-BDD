# Criação de cenários de testes

Feature: Login
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer meu primeiro pedido de compra

//Given-Dado
//When-Quando
//Then-Entao

//estou utilizando Background para nao ter repetição do Given em todos os cenarios, assim economizo linhas de código
  Background: Acessar tela de Cadastro
    Given Eu esteja na tela de Cadastro de Usuario

  Scenario: Cadastrar com campo nome vazio
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo nome deve ser prenchido"

  Scenario: Cadastrar com campo e-mail vazio
    And Eu preencho nome
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastrar com campo e-mail invalido
    And Eu preencho nome
    And Eu preencho email invalido
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo e-mail deve ser prenchido corretamente"

  Scenario: Cadastrar com campo senha vazia
    And Eu preencho nome
    And Eu preencho email
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastrar com campo senha invalida
    And Eu preencho nome
    And Eu preencho email
    And Eu preencho senha invalida
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo senha deve ter pelo menos 6 dígitos"

  Scenario: Cadastro de usuario com sucesso
    And Eu preencho minhas credenciais de Cadastro
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de Cadastramento com sucesso
