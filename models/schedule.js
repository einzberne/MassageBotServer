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
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
  },
  checkin : Sequelize.FLOAT,
  checkout : Sequelize.FLOAT
},
{
    indexes: [
        {
            unique: true,
            fields: ['userId']
        }
    ]
});

module.exports = Schedule;