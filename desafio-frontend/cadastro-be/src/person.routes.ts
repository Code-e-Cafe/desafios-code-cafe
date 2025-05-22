import { Elysia, t } from 'elysia';
import { PersonDatabase } from './db.js';

// Definição dos Schemas para validação e Swagger
const PersonSchemaBase = t.Object({
    id: t.Number(),
    criadoEm: t.String(),
    atualizadoEm: t.String()
});

// Campos obrigatórios para criação e atualização de pessoas
const PersonSchemaRequired = t.Object({
    nome: t.String({ minLength: 3, maxLength: 100, error: "O nome deve ter entre 3 e 100 caracteres." }),
    email: t.String({ format: 'email', error: "Formato de email inválido." }),
    dataNascimento: t.String({ format: 'date', error: "Formato de data inválido. Use YYYY-MM-DD." }), // "YYYY-MM-DD"
});

// Campos opcionais para a entidade pessoa
const PersonSchemaOptional = t.Object({
    telefone: t.Optional(t.String({ maxLength: 20, error: "O telefone deve ter no máximo 20 caracteres." })),
    genero: t.Optional(t.Union([
        t.Literal('Masculino'),
        t.Literal('Feminino'),
        t.Literal('Outro')
    ], { error: "Gênero deve ser Masculino, Feminino ou Outro." })),
});

// Composição do schema final para a entidade pessoa
export const PersonSchema = t.Intersect([
    PersonSchemaBase,
    PersonSchemaRequired,
    PersonSchemaOptional
]);

export const CreatePersonSchema = t.Omit(PersonSchema, ['id', 'criadoEm', 'atualizadoEm']);
export const UpdatePersonSchema = t.Partial(CreatePersonSchema);

// Definimos dbType para que o plugin saiba o tipo de 'db' que será decorado na instância principal do Elysia
// Isso é importante para o type-safety dentro do plugin.
export const personRoutes = (app: Elysia<
    string, // BasePath do plugin (pode ser string genérica)
    { 
        decorator: { db: PersonDatabase }; // 'db' está em decorator
        store: Record<string, unknown>; // Alterado de object para Record<string, unknown>
        derive: Record<string, unknown>;  // Alterado de object para Record<string, unknown>
        resolve: Record<string, unknown>; // Alterado de object para Record<string, unknown>
    }
>) => 
    app.group('/persons', (group) => group
        .get("/", async ({ db }) => {
            return await db.getAllPersons();
        }, {
            response: t.Array(PersonSchema),
            detail: {
                summary: "Retorna uma lista de todas as pessoas cadastradas.",
                tags: ["Person"]
            }
        })
        .post("/", async ({ db, body, set }) => {
            try {
                const newPerson = await db.addPerson(body);
                set.status = 201; 
                return newPerson;
            } catch (e: any) {
                set.status = 400; 
                return { error: e.message };
            }
        }, {
            body: CreatePersonSchema,
            response: t.Union([PersonSchema, t.Object({ error: t.String() })]),
            detail: {
                summary: "Cria uma nova pessoa no banco de dados.",
                tags: ["Person"]
            }
        })
        .get("/:id", async ({ db, params, set }) => {
            const person = await db.getPersonById(Number(params.id));
            if (!person) {
                set.status = 404; 
                return { error: "Person not found" };
            }
            return person;
        }, {
            params: t.Object({ id: t.Numeric() }),
            response: t.Union([PersonSchema, t.Object({ error: t.String() })]),
            detail: {
                summary: "Retorna os dados de uma pessoa específica com base no seu id.",
                tags: ["Person"]
            }
        })
        .put("/:id", async ({ db, params, body, set }) => {
            try {
                const updatedPerson = await db.updatePerson(Number(params.id), body);
                if (!updatedPerson) {
                    set.status = 404; 
                    return { error: "Person not found to update" };
                }
                return updatedPerson;
            } catch (e: any) {
                set.status = 400; 
                return { error: e.message };
            }
        }, {
            params: t.Object({ id: t.Numeric() }),
            body: UpdatePersonSchema,
            response: t.Union([PersonSchema, t.Object({ error: t.String() })]),
            detail: {
                summary: "Atualiza os dados de uma pessoa existente com base no seu id.",
                tags: ["Person"]
            }
        })
        .delete("/:id", async ({ db, params, set }) => {
            try {
                const result = await db.deletePerson(Number(params.id)) as unknown as { changes: number };
                if (result.changes === 0) {
                    set.status = 404; 
                    return { error: "Person not found to delete" };
                }
                set.status = 204; 
                return;
            } catch (e: any) {
                set.status = 500; 
                return { error: e.message };
            }
        }, {
            params: t.Object({ id: t.Numeric() }),
            response: t.Union([t.Void(), t.Object({ error: t.String() })]),
            detail: {
                summary: "Exclui uma pessoa do banco de dados com base no seu id.",
                tags: ["Person"]
            }
        })
    );
