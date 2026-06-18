require('dotenv').config();

const {
  NODE_ENV = 'dev',
  PORT = 3000,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DATABASE_URL,
} = process.env;

module.exports = {
  NODE_ENV,
  IS_PROD: NODE_ENV === 'production',
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_URL: DATABASE_URL,
};
