# API Learning com restful-api.dev

Este projeto é um laboratório simples para aprender testes de API com a API pública https://api.restful-api.dev/.

## O que você vai aprender

- Como consumir uma API REST com JavaScript
- Os principais métodos HTTP: GET, POST, PUT/PATCH e DELETE
- Como validar status code e retorno
- Conceitos importantes para entrevista
- Boas práticas de automação de API

## Endpoints principais

- GET /objects: lista objetos
- GET /objects/:id: busca um objeto por ID
- POST /objects: cria um novo objeto
- PUT /objects/:id: atualiza um objeto
- DELETE /objects/:id: remove um objeto

## Como rodar

1. Entre na pasta do projeto:
   ```bash
   cd api-learning
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os exemplos:
   ```bash
   npm run list
   npm run create
   npm run get -- 1
   npm run update -- 1
   npm run delete -- 1
   ```

## Estrutura do projeto

- src/apiClient.js: cliente HTTP centralizado
- examples/: exemplos prontos para cada operação

## Boas práticas para entrevista

- Sempre valide o status code esperado
- Verifique se o corpo da resposta contém os campos esperados
- Use dados de teste controlados
- Prefira assertions claras e objetivas
- Entenda o fluxo antes de automatizar
- Tenha clareza entre teste de API, contrato e integração

## Frases que ajudam em entrevista

- "Uso a API para validar contratos, payloads e respostas esperadas."
- "Em testes de API, eu verifico status code, body e comportamento do sistema."
- "A automação de API ajuda a validar cenários críticos com mais rapidez e confiabilidade."
