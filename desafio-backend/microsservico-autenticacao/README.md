# 🔐 Desafio: Microsserviço de Autenticação

## 🎯 Objetivo

Desenvolver um microsserviço de autenticação completo que forneça registro de usuários, login, gerenciamento de sessões, e autenticação via JWT (JSON Web Tokens).

## 🔍 Descrição

A autenticação é um componente fundamental para aplicações modernas. Neste desafio, você irá criar um microsserviço dedicado exclusivamente para lidar com autenticação e autorização, que poderá ser integrado a outros sistemas.

## ✨ Funcionalidades Essenciais

- 📝 Registro de usuários com validação de dados
- 🔑 Login com email/username e senha
- 🔄 Geração e validação de tokens JWT
- 🚪 Logout (invalidação de tokens)
- 👤 Perfil de usuário (visualizar e atualizar)
- 🔒 Recuperação de senha via email

## 🌟 Funcionalidades Bônus

- 📱 Autenticação de dois fatores (2FA)
- 🔄 Refresh tokens com controle de expiração
- 👥 Diferentes níveis de permissão (admin, user, etc.)
- 🌐 Login com provedores OAuth (Google, GitHub, etc.)
- 📊 Logs de atividades de autenticação
- 🔍 Detecção de tentativas de login suspeitas

## 🛠️ Requisitos Técnicos

- Implementar endpoints RESTful seguindo as melhores práticas
- Armazenar senhas de forma segura (hash + salt)
- Utilizar tokens JWT com expiração adequada
- Implementar validação rigorosa de dados de entrada
- Configurar CORS corretamente
- Utilizar HTTPS para todas as comunicações
- Implementar rate limiting para evitar ataques de força bruta
- Documentar a API usando Swagger, OpenAPI ou equivalente
- Escrever testes automatizados para os endpoints críticos

## 📋 Endpoints Sugeridos

- `POST /auth/register` - Registro de novos usuários
- `POST /auth/login` - Autenticação e geração de token
- `POST /auth/logout` - Invalidação de token ativo
- `POST /auth/refresh` - Renovação de token expirado
- `GET /auth/me` - Obter informações do usuário atual
- `PUT /auth/me` - Atualizar informações do usuário
- `POST /auth/forgot-password` - Solicitar recuperação de senha
- `POST /auth/reset-password` - Definir nova senha com token

## 📝 Critérios de Avaliação

- Segurança robusta contra vulnerabilidades comuns (OWASP)
- Funcionalidade completa e correta
- Estrutura e organização do código
- Seguimento de boas práticas de desenvolvimento
- Performance e escalabilidade
- Documentação clara e completa
- Qualidade e cobertura dos testes

## 🚀 Tecnologias Sugeridas

- **Backend**:
  - Node.js (Express, NestJS)
  - Python (Django REST Framework, FastAPI)
  - Java (Spring Security)
  - Go
  - Ruby on Rails

- **Banco de Dados**:
  - PostgreSQL
  - MongoDB
  - MySQL
  - Redis (para armazenamento de tokens)

## 📚 Entrega

- Código fonte completo em um repositório Git
- Instruções detalhadas de configuração e execução
- Documentação da API
- Scripts para banco de dados ou migrations
- Exemplos de requisições (Postman, Insomnia ou cURL)
- Diagrama de arquitetura (opcional, mas valorizado)

## 💡 Dicas

- Foque na segurança em cada etapa do desenvolvimento
- Considere casos de uso reais e potenciais ataques
- Implemente logging detalhado para facilitar auditoria
- Use bibliotecas estabelecidas para criptografia e geração de tokens
- Considere a escalabilidade do serviço desde o início
- Utilize Docker para facilitar o deployment e testes

## 📚 Recursos Úteis

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [JWT.io](https://jwt.io/)
- [OAuth 2.0 Simplified](https://www.oauth.com/)

Boa sorte e mantenha tudo seguro! 🔒💻☕
