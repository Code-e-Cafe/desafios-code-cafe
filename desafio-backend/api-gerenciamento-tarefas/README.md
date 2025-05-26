# 📝 Desafio: API de Gerenciamento de Tarefas

## 🎯 Objetivo

Desenvolver uma API RESTful para gerenciar tarefas (todo list) que permita criar, listar, atualizar e excluir tarefas.

## 🔍 Descrição

O gerenciamento de tarefas é uma funcionalidade comum em muitas aplicações. Neste desafio, você irá desenvolver uma API que permite aos usuários gerenciar suas tarefas diárias de maneira eficiente.

## ✨ Funcionalidades Essenciais

- ✅ Cadastro de usuários (signup)
- 🔑 Autenticação de usuários (login)
- 📋 CRUD de tarefas (Create, Read, Update, Delete)
- 🏷️ Categorização de tarefas (trabalho, estudos, pessoal, etc.)
- 📅 Definição de datas de vencimento para tarefas
- 🔔 Marcação de tarefas como concluídas

## 🌟 Funcionalidades Bônus

- 🔍 Busca e filtragem de tarefas
- 📊 Estatísticas de tarefas (concluídas, pendentes, atrasadas)
- 🔄 Sistema de recorrência para tarefas periódicas
- 📱 Notificações para tarefas próximas do vencimento
- 👥 Compartilhamento de tarefas entre usuários

## 🛠️ Requisitos Técnicos

- Implementar uma API REST seguindo as melhores práticas
- Utilizar autenticação JWT para proteger as rotas
- Armazenar dados em um banco de dados (SQL ou NoSQL)
- Implementar validação de dados nas requisições
- Documentar a API usando Swagger, OpenAPI ou equivalente
- Implementar testes automatizados (unitários e/ou integração)
- Tratar erros adequadamente com mensagens claras para o cliente

## 📋 Endpoints Sugeridos

- `POST /auth/signup` - Registro de novos usuários
- `POST /auth/login` - Autenticação de usuários
- `GET /tasks` - Listar todas as tarefas do usuário autenticado
- `GET /tasks/:id` - Obter detalhes de uma tarefa específica
- `POST /tasks` - Criar uma nova tarefa
- `PUT /tasks/:id` - Atualizar uma tarefa existente
- `DELETE /tasks/:id` - Excluir uma tarefa
- `PATCH /tasks/:id/complete` - Marcar uma tarefa como concluída
- `GET /categories` - Listar categorias disponíveis
- `POST /categories` - Criar nova categoria

## 📝 Critérios de Avaliação

- Funcionalidade completa e correta
- Estrutura e organização do código
- Seguimento de boas práticas de desenvolvimento
- Segurança da API
- Desempenho e eficiência
- Documentação clara e completa
- Testes implementados corretamente

## 🚀 Tecnologias Sugeridas

- **Backend**:
  - Node.js (Express, Fastify, NestJS)
  - Python (Django, Flask)
  - Java (Spring Boot)
  - Go
  - Ruby on Rails

- **Banco de Dados**:
  - PostgreSQL
  - MongoDB
  - MySQL
  - SQLite

## 📚 Entrega

- Código fonte completo em um repositório Git
- Instruções claras de como configurar e executar o projeto
- Documentação da API
- Scripts de criação do banco de dados ou migrations
- Exemplos de requisições (Postman, Insomnia ou cURL)

## 💡 Dicas

- Comece implementando as funcionalidades essenciais antes de avançar para os bônus
- Planeje sua estrutura de dados cuidadosamente antes de começar a codificar
- Use bibliotecas e frameworks que facilitem a validação de dados e autenticação
- Implemente logging adequado para facilitar a depuração
- Considere utilizar contêineres Docker para facilitar o setup do ambiente

Boa sorte e divirta-se codando! 💻☕
