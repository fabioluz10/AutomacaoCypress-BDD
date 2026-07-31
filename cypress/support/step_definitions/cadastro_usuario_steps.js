// Transformação dos passos gherkin em métodos/ações

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_pages from "../pages/login_page"
import { faker } from '@faker-js/faker';
import cadastro_usuario_page from "../pages/cadastro_usuario_page";

//Given-Dado
//When-Quando
//Then-Entao

const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password({length: 6})

Given("Eu esteja na tela de Cadastro de Usuario", () => {
    home_page.accessarCadastroUsuario()
})

Given("Eu preencho nome", () => {
    cadastro_usuario_page.preencherNome(nome)
})
Given("Eu preencho email invalido", () => {
    cadastro_usuario_page.preencherEmail(faker.internet.email().replace('@', '').replace('.', ''))
})

Given("Eu preencho email", () => {
    cadastro_usuario_page.preencherEmail(email)
})

Given("Eu preencho senha invalido", () => {
    cadastro_usuario_page.preencherSenha(12345)
})

Given("Eu preencho senha", () => {
    cadastro_usuario_page.preencherSenha(senha)
})

Given("Eu preencho minhas credenciais de Cadastro", () => {
    cadastro_usuario_page.preencherNome(nome)
    cadastro_usuario_page.preencherEmail(email)
    cadastro_usuario_page.preencherSenha(senha)
})

When("Eu clico em Cadastrar", () => {
    cadastro_usuario_page.fazerCadastro()
})

Then("Eu vejo a mensagem de erro {string}", (mensagem) => {
    cadastro_usuario_page.validarMensagemErroCadastro(mensagem)
})

Then("Eu vejo a mensagem de Cadastramento com sucesso", () => {
    cadastro_usuario_page.validarMensagemSucessoCadastro(nome)
})