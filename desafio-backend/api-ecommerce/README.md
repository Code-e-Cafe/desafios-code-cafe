# 🛒 Desafio: API de E-commerce

## 🎯 Objetivo

Desenvolver uma API RESTful completa para um sistema de e-commerce, permitindo gerenciar produtos, usuários, carrinhos e pedidos.

## 🔍 Descrição

O e-commerce é um dos tipos de aplicação mais comuns e complexos no mundo da tecnologia. Neste desafio, você criará uma API robusta que suporta as principais funcionalidades de uma loja online.

## ✨ Funcionalidades Essenciais

- 👤 Cadastro e autenticação de usuários
- 📦 CRUD de produtos com categorias
- 🛍️ Gerenciamento de carrinho de compras
- 💳 Processamento de pedidos
- 🔍 Busca e filtragem de produtos
- 👨‍💼 Perfil do usuário com histórico de pedidos

## 🌟 Funcionalidades Bônus

- ⭐ Sistema de avaliações e comentários
- 🏷️ Cupons de desconto
- 📊 Relatórios de vendas
- 📨 Notificações por email
- 📦 Cálculo de frete
- 💰 Integração com gateway de pagamento (simulado)
- 🔄 Sistema de estoque

## 🛠️ Requisitos Técnicos

- Implementar uma API REST seguindo as melhores práticas
- Utilizar autenticação JWT para rotas protegidas
- Implementar relacionamentos complexos no banco de dados
- Aplicar validação rigorosa de dados
- Implementar paginação para listas de produtos
- Garantir segurança nas transações
- Documentar a API usando Swagger, OpenAPI ou equivalente
- Escrever testes automatizados abrangentes

## 📋 Endpoints Sugeridos

### Autenticação
- `POST /auth/register` - Registro de usuários
- `POST /auth/login` - Login de usuários

### Produtos
- `GET /products` - Listar produtos (com filtragem e paginação)
- `GET /products/:id` - Obter detalhes de um produto
- `POST /products` - Criar produto (admin)
- `PUT /products/:id` - Atualizar produto (admin)
- `DELETE /products/:id` - Remover produto (admin)
- `GET /categories` - Listar categorias
- `GET /products/search` - Buscar produtos

### Carrinho
- `GET /cart` - Ver carrinho atual
- `POST /cart/items` - Adicionar item ao carrinho
- `PUT /cart/items/:id` - Atualizar quantidade de item
- `DELETE /cart/items/:id` - Remover item do carrinho

### Pedidos
- `POST /orders` - Criar pedido a partir do carrinho
- `GET /orders` - Listar pedidos do usuário
- `GET /orders/:id` - Ver detalhes de um pedido
- `PUT /orders/:id/cancel` - Cancelar pedido (se permitido)

### Usuários
- `GET /users/me` - Perfil do usuário atual
- `PUT /users/me` - Atualizar perfil
- `GET /users/me/addresses` - Listar endereços
- `POST /users/me/addresses` - Adicionar endereço

## 📝 Critérios de Avaliação

- Funcionalidade completa e correta
- Modelagem adequada do banco de dados
- Estrutura e organização do código
- Seguimento de boas práticas de desenvolvimento
- Segurança e tratamento de erros
- Performance e escalabilidade
- Documentação clara e completa
- Qualidade e cobertura dos testes

## 🚀 Tecnologias Sugeridas

- **Backend**:
  - Node.js (Express, NestJS)
  - Python (Django, FastAPI)
  - Java (Spring Boot)
  - Go
  - PHP (Laravel)

- **Banco de Dados**:
  - PostgreSQL
  - MySQL
  - MongoDB
  - Redis (para cache)

## 📚 Entrega

- Código fonte completo em um repositório Git
- Instruções detalhadas de configuração e execução
- Documentação da API
- Scripts para banco de dados ou migrations
- Exemplos de requisições (Postman, Insomnia ou cURL)
- Diagrama ER do banco de dados

## 💡 Dicas

- Planeje bem a estrutura do banco de dados antes de começar
- Implemente primeiro as funcionalidades essenciais
- Use transações para operações críticas (como finalizar pedido)
- Considere performance para operações de listagem e busca
- Implemente cache para dados frequentemente acessados
- Utilize Docker para facilitar o setup e testes

## 🛍️ Fluxo Típico de um E-commerce

1. Usuário se registra/faz login
2. Navega e busca produtos
3. Adiciona produtos ao carrinho
4. Revisa o carrinho
5. Fornece endereço de entrega
6. Seleciona método de pagamento
7. Confirma pedido
8. Recebe confirmação e acompanha status

Boas vendas e boa codificação! 💻🛒☕
