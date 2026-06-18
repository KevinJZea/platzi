const {
  /* DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT, */
  DB_URL,
} = require('../config');

/* const USER = encodeURIComponent(DB_USER);
const PASSWORD = encodeURIComponent(DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`; */

module.exports = {
  development: { url: DB_URL, dialect: 'postgres' },
  production: {
    url: DB_URL,
    dialect: 'postgres',
    dialectOptions: { ssl: { rejectUnauthorized: false } },
  },
};
