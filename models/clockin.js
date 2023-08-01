const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Clockin = sequelize.define('clockin', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.STRING,
  },
  clockin: {
    type: Sequelize.DATE
  }
});

module.exports = Clockin;