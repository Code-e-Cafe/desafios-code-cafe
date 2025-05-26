# 🌦️ Desafio: API de Monitoramento de Clima

## 🎯 Objetivo

Desenvolver uma API que consuma dados de uma API externa de clima, armazene históricos e forneça insights personalizados sobre condições climáticas para diferentes localizações.

## 🔍 Descrição

As APIs de clima são recursos valiosos para muitas aplicações. Neste desafio, você irá criar um serviço intermediário que não apenas repassa dados climáticos, mas também os enriquece, armazena históricos e oferece funcionalidades adicionais.

## ✨ Funcionalidades Essenciais

- 🔍 Buscar condições climáticas atuais por cidade/coordenadas
- 🗺️ Suporte a múltiplas localizações
- 📊 Armazenar histórico de dados climáticos
- 👤 Cadastro e autenticação de usuários
- 📍 Gerenciamento de localizações favoritas por usuário
- 📱 Formatação adequada dos dados para consumo pelo frontend

## 🌟 Funcionalidades Bônus

- 📈 Análises estatísticas dos dados (médias, máximas, mínimas)
- 🔮 Previsões para os próximos dias
- 📊 Gráficos de tendências climáticas (dados para frontend)
- 🔔 Sistema de alertas para condições específicas
- 🌐 Integração com múltiplas APIs de clima (fallback)
- 📱 Notificações personalizadas (ex: "Leve um guarda-chuva hoje")
- 🗺️ Visualização em mapa das condições por região

## 🛠️ Requisitos Técnicos

- Implementar uma API REST seguindo as melhores práticas
- Utilizar cache para reduzir chamadas à API externa
- Implementar rate limiting para evitar abusos
- Configurar jobs periódicos para atualização de dados
- Implementar sistema de fallback para indisponibilidade da API externa
- Documentar a API usando Swagger, OpenAPI ou equivalente
- Implementar testes automatizados (incluindo mocks para API externa)

## 📋 Endpoints Sugeridos

### Autenticação
- `POST /auth/register` - Registro de usuários
- `POST /auth/login` - Login de usuários

### Clima
- `GET /weather/current` - Clima atual (por cidade ou coordenadas)
- `GET /weather/forecast` - Previsão para próximos dias
- `GET /weather/history` - Histórico de dados climáticos
- `GET /weather/stats` - Estatísticas climáticas

### Localizações
- `GET /locations` - Listar localizações favoritas do usuário
- `POST /locations` - Adicionar localização favorita
- `DELETE /locations/:id` - Remover localização favorita
- `GET /locations/search` - Buscar localizações pelo nome

### Alertas (bônus)
- `GET /alerts` - Listar alertas configurados
- `POST /alerts` - Criar alerta para condição específica
- `DELETE /alerts/:id` - Remover alerta

## 📝 Critérios de Avaliação

- Funcionalidade completa e correta
- Resiliência a falhas da API externa
- Estrutura e organização do código
- Seguimento de boas práticas de desenvolvimento
- Performance e uso eficiente de cache
- Documentação clara e completa
- Qualidade e cobertura dos testes

## 🚀 Tecnologias Sugeridas

- **Backend**:
  - Node.js (Express, NestJS)
  - Python (FastAPI, Django)
  - Java (Spring Boot)
  - Go
  - Ruby on Rails

- **Banco de Dados**:
  - PostgreSQL
  - MongoDB
  - Redis (para cache)
  - TimescaleDB (para dados temporais)

- **APIs de Clima**:
  - [OpenWeatherMap](https://openweathermap.org/api)
  - [WeatherAPI](https://www.weatherapi.com/)
  - [AccuWeather](https://developer.accuweather.com/)
  - [Climatempo](https://advisor.climatempo.com.br/)

## 📚 Entrega

- Código fonte completo em um repositório Git
- Instruções detalhadas de configuração e execução
- Documentação da API
- Scripts para banco de dados ou migrations
- Exemplos de requisições (Postman, Insomnia ou cURL)
- Estratégia de cache e fallback documentada

## 💡 Dicas

- Crie uma conta gratuita em pelo menos uma API de clima
- Implemente cache com TTL apropriado para dados climáticos
- Considere o uso de um banco de dados temporal para históricos
- Implemente um sistema de logging detalhado para monitorar chamadas externas
- Use mocks nos testes para simular respostas da API externa
- Considere problemas de fusos horários nas análises temporais
- Utilize Docker para facilitar o setup e testes

## 🌡️ Exemplo de Fluxo

1. Usuário se registra/faz login
2. Adiciona cidades de interesse ao perfil
3. Consulta condições atuais ou previsões
4. Visualiza histórico e estatísticas
5. Configura alertas para condições específicas
6. Recebe notificações quando condições são atendidas

Que o tempo esteja sempre ao seu favor! ☀️🌧️💻☕
