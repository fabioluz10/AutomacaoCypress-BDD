# Criação de cenários de testes

Feature: Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

//Given-Dado
//When-Quando
//Then-Entao

    Scenario: Efetuar login com campo e-mail vazio
        Given Eu esteja na tela de Login
        When Eu clico em Login
        Then Eu vejo a mensagem "E-mail inválido."
    
    Scenario: Efetuar login com campo e-mail inválido
        Given Eu esteja na tela de Login
        And Eu preencho e-mail invalido
        When Eu clico em Login
        Then Eu vejo a mensagem "E-mail inválido."
    
    Scenario: Efetuar login com campo senha vazio
        Given Eu esteja na tela de Login
        And Eu preencho e-mail
        When Eu clico em Login
        Then Eu vejo a mensagem "Senha inválida."
            
    Scenario: Efetuar login com campo senha inválido
        Given Eu esteja na tela de Login
        And Eu preencho e-mail
        And Eu preencho senha invalida
        When Eu clico em Login
        Then Eu vejo a mensagem "Senha inválida."

    Scenario: Efetuar login com sucesso
        Given Eu esteja na tela de Login
        And Eu preencho minhas credenciais
        When Eu clico em Login
        Then Eu vejo a mensagem de sucesso
