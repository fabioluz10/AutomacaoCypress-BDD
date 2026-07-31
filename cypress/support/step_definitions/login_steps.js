// Transformação dos passos gherkin em métodos/ações

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page";
import { faker } from '@faker-js/faker';

//Given-Dado
//When-Quando
//Then-Entao

const email = faker.internet.email()
const senha = faker.internet.password({length: 6})


Given("Eu esteja na tela de Login", () => {
    home_page.accessarLogin()
})

Given("Eu preencho minhas credenciais", () => {
    login_page.preencherEmail(email)
    login_page.preencherSenha(senha)
})

Given("Eu preencho e-mail invalido", () => {
    login_page.preencherEmail(faker.internet.email().replace('@', '').replace('.', ''))
})

Given("Eu preencho e-mail", () => {
    login_page.preencherEmail(email)
})

Given("Eu preencho senha invalida", () => {
    login_page.preencherSenha('12345')
})

Given("Eu preencho senha", () => {
    login_page.preencherSenha(senha)
})

When("Eu clico em Login", () => {
    login_page.fazerLogin()
})

Then("Eu vejo a mensagem {string}", (message) => {
    login_page.validarMensagemErro(message)
})

Then("Eu vejo a mensagem de sucesso", () => {
    login_page.validarMensagemSucesso(email)
})