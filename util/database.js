const Sequelize = require('sequelize');

const sequelize = new Sequelize('massage', 'root', 'hime4434', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
