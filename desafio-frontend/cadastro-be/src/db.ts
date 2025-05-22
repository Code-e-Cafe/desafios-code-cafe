import { Database } from 'bun:sqlite';

export interface Person  {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string; // "YYYY-MM-DD" - Tornou-se obrigatório
  telefone?: string;
  genero?: 'Masculino' | 'Feminino' | 'Outro';
  criadoEm: string; // ISO8601
  atualizadoEm: string; // ISO8601
}

export class PersonDatabase {
    private db: Database;

    constructor() {
        this.db = new Database('cadastro.db');

        this.init()
            .then(() => console.log(`Database initialized at cadastro.db`))
            .catch(console.error);
    }

    async getAllPersons() {
        return this.db.query('SELECT * FROM Person').all() as Person[];
    }

    async getPersonById(id: number) {
        return this.db.query('SELECT * FROM Person WHERE id = ?').get(id) as Person | null;
    }

    async addPerson(person: Omit<Person, 'id' | 'criadoEm' | 'atualizadoEm'>) {
        const { nome, email, telefone, dataNascimento, genero } = person;
        const agora = new Date().toISOString();
        return this.db
            .query(
                `INSERT INTO Person (nome, email, telefone, dataNascimento, genero, criadoEm, atualizadoEm)
                 VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *`
            )
            .get(
                nome,
                email,
                telefone ?? null,
                dataNascimento, // dataNascimento is mandatory
                genero ?? null,
                agora,
                agora
            ) as Person;
    }

    async updatePerson(
        id: number,
        person: Partial<Omit<Person, 'id' | 'criadoEm' | 'atualizadoEm'>>
    ) {
        const fields: string[] = [];
        const values: any[] = [];

        if (person.nome !== undefined) {
            fields.push('nome = ?');
            values.push(person.nome);
        }
        if (person.email !== undefined) {
            fields.push('email = ?');
            values.push(person.email);
        }
        if (person.telefone !== undefined) {
            fields.push('telefone = ?');
            values.push(person.telefone);
        }
        if (person.dataNascimento !== undefined) {
            fields.push('dataNascimento = ?');
            values.push(person.dataNascimento);
        }
        if (person.genero !== undefined) {
            fields.push('genero = ?');
            values.push(person.genero);
        }

        if (fields.length === 0) {
             return this.getPersonById(id);
        }

        fields.push('atualizadoEm = ?');
        values.push(new Date().toISOString());

        values.push(id);

        const setClause = fields.join(', ');
        this.db.run(
            `UPDATE Person SET ${setClause} WHERE id = ?`,
            ...values
        );
        return this.getPersonById(id);
    }

    async deletePerson(id: number) {
        return this.db.prepare('DELETE FROM Person WHERE id = ?').run(id);
    }

    async init() {
        // Código para criar tabela e trigger
        // Este é o local mais provável do erro de sintaxe SQL
        await this.db.exec(`
            CREATE TABLE IF NOT EXISTS Person (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL CHECK(length(nome) >= 3 AND length(nome) <= 100),
                email TEXT NOT NULL UNIQUE CHECK(email LIKE '%_@__%.__%'),
                dataNascimento TEXT NOT NULL CHECK(date(dataNascimento) IS NOT NULL),
                telefone TEXT CHECK(length(telefone) <= 20),
                genero TEXT CHECK(genero IS NULL OR genero IN ('Masculino', 'Feminino', 'Outro')),
                criadoEm TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
                atualizadoEm TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
            );
        `);

        await this.db.exec(`
            CREATE TRIGGER IF NOT EXISTS update_person_atualizadoEm
            AFTER UPDATE ON Person
            FOR EACH ROW
            BEGIN
                UPDATE Person SET atualizadoEm = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') WHERE id = OLD.id;
            END;
        `);
    }

    async close() {
        return this.db.close();
    }
}