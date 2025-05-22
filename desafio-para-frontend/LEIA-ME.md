# 🚀 Desafio Frontend da CODE & CAFÉ 👩‍💻👨‍💻
#    CRUD de Pessoa 

## 🎯 Objetivo
O desafio consiste em desenvolver uma aplicação frontend que consuma a API disponibilizada, permitindo a **criação**, **leitura**, **atualização** e **exclusão** de Pessoas.

Os participantes deverão construir uma interface intuitiva e responsiva, garantindo uma boa experiência ao usuário ao interagir com os dados da API.

## 💻 Tecnologias Recomendadas
- **HTML, CSS e JavaScript** (ou frameworks como React, Vue ou Angular)
- **Fetch API** ou alguma biblioteca para requisições HTTP (Axios, por exemplo)
- **Gerenciamento de estado** (opcional, mas pode ser útil)

---

## 🔗 Endpoints da API
A API base para este desafio é `http://localhost:3003`. Todos os endpoints abaixo são relativos a esta URL base.

---

### 1. 📜 Listar todas as Pessoas
- **Método:** `GET`
- **Path:** `/persons`
- **Descrição:** Retorna uma lista de todas as pessoas cadastradas.
- **Entrada:** Nenhuma.
- **Saída (Sucesso `200 OK`):** Um array de objetos Pessoa. Cada objeto Pessoa segue o schema:
  ```json
  {
    "id": 0, // number (gerado automaticamente)
    "nome": "string", // obrigatório
    "email": "string", // obrigatório
    "telefone": "string", // opcional
    "dataNascimento": "string", // opcional (formato YYYY-MM-DD ou ISO String)
    "genero": "string", // opcional, valores permitidos: 'Masculino', 'Feminino', 'Outro'
    "criadoEm": "string", // string (formato ISO datetime, gerado automaticamente)
    "atualizadoEm": "string" // string (formato ISO datetime, gerado automaticamente)
  }
  ```
- **Exemplo de Chamada:** `GET http://localhost:3003/persons`

---

### 2. ➕ Criar uma nova Pessoa
- **Método:** `POST`
- **Path:** `/persons`
- **Descrição:** Cria uma nova pessoa no banco de dados.
- **Entrada (Corpo da Requisição - `application/json`):** Um objeto contendo os dados da pessoa a ser criada.
  ```json
  {
    "nome": "string", // Obrigatório
    "email": "string", // Obrigatório
    "telefone": "string", // Opcional
    "dataNascimento": "string", // Opcional (formato YYYY-MM-DD ou ISO String)
    "genero": "string" // Opcional, valores permitidos: 'Masculino', 'Feminino', 'Outro'
  }
  ```
- **Saída (Sucesso `201 Created`):** O objeto da Pessoa recém-criada, incluindo `id`, `criadoEm` e `atualizadoEm`.
- **Saída (Erro `400 Bad Request`):** Um objeto com uma mensagem de erro se os dados fornecidos forem inválidos.
  ```json
  {
    "error": "mensagem de erro detalhada"
  }
  ```
- **Exemplo de Chamada:** `POST http://localhost:3003/persons` com o JSON acima no corpo.

---

### 3. 🆔 Obter uma Pessoa por ID
- **Método:** `GET`
- **Path:** `/persons/{id}`
- **Descrição:** Retorna os dados de uma pessoa específica com base no seu `id`.
- **Entrada (Parâmetro de Rota):**
    - `{id}`: O ID numérico da pessoa a ser buscada.
- **Saída (Sucesso `200 OK`):** O objeto da Pessoa correspondente ao ID.
- **Saída (Erro `404 Not Found`):** Um objeto com uma mensagem de erro se a pessoa não for encontrada.
  ```json
  {
    "error": "Person not found"
  }
  ```
- **Exemplo de Chamada:** `GET http://localhost:3003/persons/1`

---

### 4. 🔄 Atualizar uma Pessoa existente
- **Método:** `PUT`
- **Path:** `/persons/{id}`
- **Descrição:** Atualiza os dados de uma pessoa existente com base no seu `id`. Apenas os campos fornecidos no corpo da requisição serão atualizados. O campo `atualizadoEm` será automaticamente atualizado.
- **Entrada (Parâmetro de Rota):**
    - `{id}`: O ID numérico da pessoa a ser atualizada.
- **Entrada (Corpo da Requisição - `application/json`):** Um objeto contendo os campos da pessoa a serem atualizados. Todos os campos são opcionais.
  ```json
  {
    "nome": "string", // Opcional
    "email": "string", // Opcional
    "telefone": "string", // Opcional
    "dataNascimento": "string", // Opcional (formato YYYY-MM-DD ou ISO String)
    "genero": "string" // Opcional, valores permitidos: 'Masculino', 'Feminino', 'Outro'
  }
  ```
- **Saída (Sucesso `200 OK`):** O objeto da Pessoa atualizada.
- **Saída (Erro `404 Not Found`):** Um objeto com uma mensagem de erro se a pessoa não for encontrada para atualização.
- **Saída (Erro `400 Bad Request`):** Um objeto com uma mensagem de erro se os dados fornecidos forem inválidos.
- **Exemplo de Chamada:** `PUT http://localhost:3003/persons/1` com os campos a serem atualizados no corpo.

---

### 5. 🗑️ Excluir uma Pessoa
- **Método:** `DELETE`
- **Path:** `/persons/{id}`
- **Descrição:** Exclui uma pessoa do banco de dados com base no seu `id`.
- **Entrada (Parâmetro de Rota):**
    - `{id}`: O ID numérico da pessoa a ser excluída.
- **Saída (Sucesso `204 No Content`):** Nenhuma resposta no corpo.
- **Saída (Erro `404 Not Found`):** Um objeto com uma mensagem de erro se a pessoa não for encontrada para exclusão.
- **Saída (Erro `500 Internal Server Error`):** Um objeto com uma mensagem de erro para outros problemas no servidor.
- **Exemplo de Chamada:** `DELETE http://localhost:3003/persons/1`

---

## ✨ Requisitos Adicionais do Desafio
- Consumir os endpoints da API corretamente, tratando os diferentes status de resposta.
- Criar uma interface moderna, intuitiva e responsiva.
- Implementar feedback visual claro para o usuário (mensagens de carregamento, erro, sucesso).
- Utilizar uma das paletas de cores sugeridas abaixo (ou propor uma nova com justificativa).

## 🎨 Paletas de Cores Sugeridas
### 1. Paleta Neutra
- `#F5F5F5` (Cinza Claro)
- `#CCCCCC` (Cinza Médio)
- `#333333` (Cinza Escuro)
- `#0066CC` (Azul Profundo)

### 2. Paleta Vibrante
- `#FF5733` (Laranja Forte)
- `#FFC300` (Amarelo Intenso)
- `#DAF7A6` (Verde Claro)
- `#C70039` (Vermelho Vívido)

### 3. Paleta Minimalista
- `#FFFFFF` (Branco)
- `#000000` (Preto)
- `#808080` (Cinza Neutro)
- `#3A3A3A` (Cinza Escuro)


# Boa sorte! 🚀