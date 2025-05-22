# Usar a imagem oficial do Bun como base
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Copiar package.json e bun.lockb
COPY package.json bun.lockb ./

# Instalar dependências de produção
RUN bun install --production

# Copiar o código da aplicação
COPY src ./src
COPY tsconfig.json ./

# Expor a porta que a aplicação vai rodar
EXPOSE 3003

# Comando para rodar a aplicação
CMD ["bun", "run", "src/index.ts"]
