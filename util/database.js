const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('massage', process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: process.env.DB_SSL=="true" ? true: false
    },
  },
});

module.exports = sequelize;
