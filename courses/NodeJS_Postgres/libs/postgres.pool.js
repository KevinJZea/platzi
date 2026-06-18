const { Pool } = require('pg');
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  IS_PROD,
  DB_URL,
} = require('../config');

const options = {};

if (IS_PROD) {
  options.connectionString = DB_URL;
  options.ssl = { rejectUnauthorized: false };
} else {
  const USER = encodeURIComponent(DB_USER);
  const PASSWORD = encodeURIComponent(DB_PASSWORD);
  const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
