import dotenv from 'dotenv';
dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || 'postgres://ecommerce:ecommerce_dev@localhost:5432/ecommerce',
  logLevel: process.env.LOG_LEVEL || 'info'
};
