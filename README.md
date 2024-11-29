# Integração Contínua

Desafio do módulo Integração Contínua do curso FullCycle 3.0

## Desafio
- Crie uma pequena aplicação simples em node.js (qualquer aplicação mesmo)
- Crie testes de unidade para essa aplicação
- Crie uma pipeline de CI utilizando o Github actions que:
    - Instale a aplicação
    -  Execute os testes
    - Execute o SonarCloud
- Suba essa aplicação para um repositório público no Github e ative o status check para que seja possível dar o merge apenas se a aplicação passar na pipeline de CI e também se a aplicação passar no quality gate do SonarCloud.