import { Elysia, t } from 'elysia';
import { swagger } from "@elysiajs/swagger";
import { html } from '@elysiajs/html';
import { PersonDatabase } from './db.js';
import fs from 'node:fs/promises';
import { marked } from 'marked';
import { personRoutes } from './person.routes.js'; // Importar as rotas de Person

// Os schemas foram movidos para person.routes.ts

// Export app for testing - REMOVED
const app = new Elysia() // Changed back from export const app
    .use(swagger())
    .use(html())
    // Use a different database for testing if TEST_DB_PATH is set - REMOVED
    .decorate('db', new PersonDatabase(/* 'cadastro.db' */)) // Decorator continua aqui para ser acessível globalmente
    .get("/", async () => {
        try {
            const readmeContent = await fs.readFile('DESAFIO.md', 'utf-8'); // Corrigido o caminho aqui
            const htmlContent = marked(readmeContent);
            return htmlContent;
        } catch (error) {
            console.error("Erro ao ler ou converter README.md:", error);
            return "Erro ao carregar README.md";
        }
    }, {
        detail: { // Adicionar detalhe para o endpoint raiz
            summary: "Exibe o desafio frontend (DESAFIO.md)",
            tags: ["Documentação"], // Mover para uma tag "Documentação"
            // hidden: true // Alternativamente, para ocultar completamente do Swagger
        }
    })
    .use(personRoutes) // Usar o plugin de rotas de Person
    .listen(3003);

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );