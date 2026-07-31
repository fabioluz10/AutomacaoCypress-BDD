//Criação de ações da pagina de Cadastro de usuarios

/// <reference types="cypress" />

export default {
    preencherNome(nome) {
        cy.get('#user')
            .clear()
            .type(nome)
    },
    preencherEmail(email) {
        cy.get('#email')
            .clear()
            .type(email)
    },
    preencherSenha(senha) {
        cy.get('#password')
            .clear()
            .type(senha)
    },
    fazerCadastro() {
        cy.get('#btnRegister')
            .click()
    },
    validarMensagemErroCadastro(mensagem) {
        cy.contains(mensagem)
            .should('be.visible')
    },
    validarMensagemSucessoCadastro(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    }
}