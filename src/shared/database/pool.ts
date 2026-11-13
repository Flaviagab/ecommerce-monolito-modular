import { Pool } from 'pg';
import { env } from '../../config/env';

export const pool = new Pool({ connectionString: env.databaseUrl });
pool.on('error', (error) => {
  // Erros inesperados de conexoes ociosas devem ser registrados.
  console.error('Erro inesperado no pool PostgreSQL:', error);
});
