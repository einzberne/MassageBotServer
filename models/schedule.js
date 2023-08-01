const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Schedule = sequelize.define('schedule', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  date: {
    type: Sequelize.DATEONLY
  },
  checkin : Sequelize.FLOAT,
  checkout : Sequelize.FLOAT
});

module.exports = Schedule;