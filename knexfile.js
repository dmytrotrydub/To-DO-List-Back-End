require('dotenv').config();
const path = require('path');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_DEV_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DEV,
      charset: 'utf8',
    },
    migrations: {
      directory: path.join(__dirname, 'KnexConfig', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'KnexConfig', 'seeds'),
    },
  },
};
