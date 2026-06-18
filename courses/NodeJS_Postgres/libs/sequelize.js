const { Sequelize } = require('sequelize');

const {
  /* DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT, */
  DB_URL,
  IS_PROD,
} = require('../config');
const setupModels = require('../db/models');

/* const USER = encodeURIComponent(DB_USER);
const PASSWORD = encodeURIComponent(DB_PASSWORD); */
/* const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`; */
/* const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`; */

const options = {
  /* dialect: 'postgres', */
  dialect: 'postgres',
  logging: IS_PROD ? undefined : console.log,
};

if (IS_PROD) options.dialectOptions = { ssl: { rejectUnauthorized: false } };

const sequelize = new Sequelize(DB_URL, options);

setupModels(sequelize);

module.exports = sequelize;
