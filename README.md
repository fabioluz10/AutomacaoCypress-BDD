# Automação de Testes com Cypress, BDD e GitHub Actions

## 👨‍💻 Sobre mim
Olá! Sou o Fabio Luz, Analista de Testes de Software (QA) com mais de 11 anos de experiência em qualidade, automação e melhoria contínua de processos. Meu foco está em entregar soluções eficientes, confiáveis e escaláveis para garantir a qualidade dos produtos.

## 🚀 Sobre este repositório
Este repositório é uma demonstração prática de automação de testes guiada por comportamento (**Behavior-Driven Development - BDD**), utilizando **Cypress** e **Cucumber** em pipeline de **CI/CD**. O objetivo do projeto é estruturar cenários em **Gherkin** que sirvam tanto como documentação viva quanto como testes automatizados executáveis, integrando tudo a uma pipeline de CI/CD com **GitHub Actions**

## ✅ Principais recursos
- Automação com Cypress e Cucumber (BDD)
- Estrutura baseada em Page Object Model
- Cenários de cadastro e login cobrindo validações de entrada
- Geração de relatórios e evidências
- Execução automática com GitHub Actions
- Captura de screenshots e vídeos em execução

## 🛠️ Tecnologias utilizadas
- Cypress
- JavaScript
- Cucumber BDD
- Faker.js
- Mochawesome Reporter
- GitHub Actions

## 📁 Estrutura do projeto
```text
cypress/
  e2e/
    features/
      cadastro_usuario.feature
      login.feature
  support/
    pages/
      cadastro_usuario_page.js
      home_page.js
      login_page.js
.github/
  workflows/
    cypress.yml
```

## � Exemplos de cenários BDD
A automação é escrita com linguagem Gherkin, tornando os cenários legíveis para quem participa do processo de QA e desenvolvimento.

```gherkin
Feature: Login

  Scenario: Login com sucesso
    Given Eu esteja na tela de Login
    And Eu preencho minhas credenciais
    When Eu clico em Login
    Then Eu vejo a mensagem de sucesso
```

```gherkin
Feature: Cadastro de usuário

  Scenario: Cadastro com campos inválidos
    Given Eu esteja na tela de Cadastro de Usuario
    And Eu preencho nome
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem de erro "O campo e-mail deve ser prenchido corretamente"
```

## �🧪 Como executar localmente
### Pré-requisitos
- Node.js instalado
- npm instalado
- Git instalado

### Instalação
```bash
npm install
```

### Executar os testes
```bash
npm run test:ci
```

### Abrir o Cypress em modo interativo
```bash
npx cypress open
```

## 📊 Relatórios e evidências
Os resultados da execução geram:
- relatórios HTML
- screenshots em caso de falha
- vídeos da execução
- artefatos salvos no GitHub Actions

## ⚙️ Pipeline CI/CD
A pipeline foi configurada no GitHub Actions para executar os testes automaticamente em um ambiente de integração contínua.

### O que acontece na pipeline
- Faz o checkout do projeto
- Instala as dependências
- Executa os testes com Cypress
- Faz upload de relatórios, screenshots e vídeos como artefatos
