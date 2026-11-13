import { app } from './app';
import { env } from './config/env';
import { logger } from './shared/observability/logger';

app.listen(env.port, () => {
  logger.info({ port: env.port }, 'API iniciada');
});
