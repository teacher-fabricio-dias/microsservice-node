import { Pool } from "pg";

const connectionString = 'Put Here the Connection String';

const db = new Pool({ connectionString });

export default db;

// Só isso que tem que fazer para conectar o banco de dados