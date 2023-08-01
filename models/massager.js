const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Massager = sequelize.define('massager', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.STRING,
    unique: 'constraint name'
  },
  uuid: {
    type: Sequelize.STRING,
    unique: 'constraint name'
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  features: {
    type: Sequelize.STRING,
  }
});

module.exports = Massager;