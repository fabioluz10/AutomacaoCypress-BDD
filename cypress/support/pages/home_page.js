//Criação de ações da pagina Home

/// <reference types="cypress" />

export default {
    accessarLogin() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    },
    accessarCadastroUsuario() {
        cy.visit('/')
            .get('.top_header_left')
            .should('be.visible')

        cy.get('.fa-lock')
            .click()
    }
}