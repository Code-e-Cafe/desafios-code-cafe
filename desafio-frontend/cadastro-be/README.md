# Desafio Frontend: API de Cadastro

Este repositório contém o backend para o desafio de frontend da CODE & CAFÉ. A API é construída com ElysiaJS e Bun.

## Instruções do Desafio Frontend

Após subir o backend (localmente ou via Docker, conforme instruções abaixo), você encontrará as instruções detalhadas para o desafio de desenvolvimento frontend no arquivo `DESAFIO.md` na raiz deste projeto. Este arquivo contém a descrição dos objetivos, tecnologias recomendadas, detalhes dos endpoints da API, requisitos.

Alternativamente, com o backend rodando, acesse a rota raiz da API no seu navegador (`http://localhost:3003/`) para visualizar o conteúdo do `DESAFIO.md` renderizado.

## Subindo o Projeto Localmente

### Pré-requisitos

*   [Bun](https://bun.sh/) instalado na sua máquina.

### Passos

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone <url-do-repositorio>
    cd cadastro-be
    ```

2.  **Instale as dependências:**
    ```bash
    bun install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    O comando `dev` no `package.json` utiliza `--watch` para reiniciar o servidor automaticamente após alterações nos arquivos.
    ```bash
    bun run dev
    ```
    A API estará disponível em `http://localhost:3003`.
    A documentação Swagger da API estará disponível em `http://localhost:3003/swagger`.

## Subindo o Projeto com Docker

### Pré-requisitos

*   [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/) instalados na sua máquina.

### Passos

1.  **Navegue até a raiz do projeto `cadastro-be`.**

2.  **Construa a imagem e suba o container usando Docker Compose:**
    ```bash
    docker-compose up -d --build
    ```
    O `-d` executa o container em modo detached (em segundo plano).
    A API estará disponível em `http://localhost:3003` (a porta 3003 do host é mapeada para a porta 3003 do container).
    A documentação Swagger da API estará disponível em `http://localhost:3003/swagger`.

3.  **Para parar os containers:**
    ```bash
    docker-compose down
    ```

## Apontando o Frontend para a API no Docker

Quando o backend (`cadastro-be`) está rodando via Docker na sua máquina local, ele expõe a porta `3003`. Portanto, do ponto de vista do seu frontend (que também estará rodando na sua máquina local, seja via `npm start`, `yarn dev`, ou similar), a URL base da API será:

```
http://localhost:3003
```

**Exemplo de configuração no frontend (JavaScript/TypeScript):**

```javascript
// Em um arquivo de configuração do seu frontend, por exemplo, config.js ou .env
const API_BASE_URL = 'http://localhost:3003';

// Ao fazer chamadas para a API:
fetch(`${API_BASE_URL}/persons`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro ao buscar dados:', error));
```

Certifique-se de que o seu frontend está configurado para fazer requisições para `http://localhost:3003` quando o backend estiver rodando via Docker na sua máquina.

Se o seu frontend também estiver rodando dentro de um container Docker na mesma rede Docker Compose, você poderia usar o nome do serviço do backend (definido no `docker-compose.yml`, que é `cadastro-be`) como hostname em vez de `localhost`:

```
http://cadastro-be:3003
```
No entanto, para o desafio onde o frontend provavelmente rodará diretamente na sua máquina (fora do Docker, ou em seu próprio processo de desenvolvimento), `http://localhost:3003` é a URL correta.