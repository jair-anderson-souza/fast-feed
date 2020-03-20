const { Sequelize } = require('sequelize');
const User = require('../../src/models/User');
const dbConfig = require('../config/database');

this.connection = new Sequelize(dbConfig);
User.init(this.connection);