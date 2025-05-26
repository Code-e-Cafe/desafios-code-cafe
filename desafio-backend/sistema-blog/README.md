# 📝 Desafio: Sistema de Blog

## 🎯 Objetivo

Desenvolver uma API RESTful para um sistema de blog completo, com gerenciamento de usuários, posts, comentários e categorias.

## 🔍 Descrição

Um sistema de blog é uma excelente maneira de praticar conceitos fundamentais de desenvolvimento backend. Neste desafio, você irá criar uma API que suporta todas as funcionalidades necessárias para um blog moderno.

## ✨ Funcionalidades Essenciais

- 👤 Cadastro e autenticação de usuários
- ✍️ CRUD de posts com suporte a markdown
- 🏷️ Categorização e tags para posts
- 💬 Sistema de comentários em posts
- 👀 Visualização de posts com paginação
- 👨‍💼 Perfis de usuário com bio e foto

## 🌟 Funcionalidades Bônus

- 👍 Sistema de likes/reações em posts e comentários
- 🔍 Busca avançada no conteúdo do blog
- 📊 Estatísticas de visualizações e interações
- 📱 Notificações para novas interações
- 🔖 Sistema de favoritos para usuários
- 🖼️ Upload e gerenciamento de imagens
- 📰 Editor WYSIWYG ou suporte a rich text

## 🛠️ Requisitos Técnicos

- Implementar uma API REST seguindo as melhores práticas
- Utilizar autenticação JWT para rotas protegidas
- Implementar relacionamentos adequados no banco de dados
- Aplicar validação de dados nas requisições
- Implementar paginação para listagens
- Usar armazenamento adequado para imagens (opcional)
- Documentar a API usando Swagger, OpenAPI ou equivalente
- Escrever testes automatizados para endpoints principais

## 📋 Endpoints Sugeridos

### Autenticação
- `POST /auth/register` - Registro de usuários
- `POST /auth/login` - Login de usuários

### Posts
- `GET /posts` - Listar posts (com paginação)
- `GET /posts/:id` - Obter um post específico
- `POST /posts` - Criar novo post (autenticado)
- `PUT /posts/:id` - Atualizar post (autor ou admin)
- `DELETE /posts/:id` - Remover post (autor ou admin)
- `GET /posts/search` - Buscar posts

### Comentários
- `GET /posts/:id/comments` - Listar comentários de um post
- `POST /posts/:id/comments` - Adicionar comentário (autenticado)
- `PUT /comments/:id` - Editar comentário (autor)
- `DELETE /comments/:id` - Remover comentário (autor ou admin)

### Categorias e Tags
- `GET /categories` - Listar categorias
- `GET /categories/:id/posts` - Listar posts de uma categoria
- `GET /tags` - Listar tags populares
- `GET /tags/:id/posts` - Listar posts com uma tag específica

### Usuários
- `GET /users/:id` - Ver perfil público
- `GET /users/me` - Ver próprio perfil
- `PUT /users/me` - Atualizar perfil
- `GET /users/:id/posts` - Listar posts de um usuário

## 📝 Critérios de Avaliação

- Funcionalidade completa e correta
- Modelagem adequada do banco de dados
- Estrutura e organização do código
- Seguimento de boas práticas de desenvolvimento
- Segurança e tratamento de erros
- Performance com grandes volumes de dados
- Documentação clara e completa
- Qualidade e cobertura dos testes

## 🚀 Tecnologias Sugeridas

- **Backend**:
  - Node.js (Express, NestJS)
  - Python (Django, Flask)
  - Java (Spring Boot)
  - Ruby on Rails
  - PHP (Laravel)

- **Banco de Dados**:
  - PostgreSQL
  - MySQL
  - MongoDB
  - SQLite (para desenvolvimento)

## 📚 Entrega

- Código fonte completo em um repositório Git
- Instruções detalhadas de configuração e execução
- Documentação da API
- Scripts para banco de dados ou migrations
- Exemplos de requisições (Postman, Insomnia ou cURL)
- Diagrama ER do banco de dados (opcional)

## 💡 Dicas

- Planeje bem a estrutura do banco de dados antes de começar
- Considere usar soft delete para posts e comentários
- Implemente validação de conteúdo para evitar spam
- Use sanitização para conteúdo HTML se permitido
- Considere performance para queries frequentes (use índices)
- Utilize Docker para facilitar o setup e testes

## 📖 Fluxo Típico do Blog

1. Usuário se registra/faz login
2. Autor cria/edita posts
3. Leitores visualizam posts
4. Leitores comentam em posts
5. Autor responde comentários
6. Leitores buscam posts por categoria/tag
7. Administrador modera conteúdo quando necessário

Boa escrita e boa codificação! ✍️💻☕
