require('dotenv').config();
module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'project2_dev',
    dialect: 'mysql',
    host: process.env.SEQUELIZE_HOST,
    port: 3306
  },
  test: {
    username: process.env.TU,
    password: process.env.TP || null,
    database: 'project2_test',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: 'uj4g65ob67ovgbxg',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'sap7m17ztqxmz6hk',
    host: process.env.JASWSDB_HOST,
    port: 3306,
    dialect: 'mysql'
  }
};
