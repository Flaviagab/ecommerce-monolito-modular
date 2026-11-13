import pino from 'pino';
import { env } from '../../config/env';

export const logger = pino({
  level: env.logLevel,
  base: { service: 'ecommerce-api', environment: env.nodeEnv },
  timestamp: pino.stdTimeFunctions.isoTime
});
