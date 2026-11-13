import { readFile } from 'node:fs/promises';
import { pool } from '../src/shared/database/pool';

async function main() {
  try {
    await pool.query('CREATE EXTENSION IF NOT EXISTS pgcrypto');
    const sql = await readFile('database/migrations/001-initial-schema.sql', 'utf8');
    await pool.query(sql);
    console.log('Migrations aplicadas.');
  } catch (error) {
    console.error('Falha ao aplicar migrations:', error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}
main();
