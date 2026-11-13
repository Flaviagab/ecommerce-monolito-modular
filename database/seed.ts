import { readFile } from 'node:fs/promises';
import { pool } from '../src/shared/database/pool';

async function main() {
  try {
    const sql = await readFile('database/seeds/001-products.sql', 'utf8');
    await pool.query(sql);
    console.log('Seed executado.');
  } catch (error) {
    console.error('Falha ao executar seed:', error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}
main();
