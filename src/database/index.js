const { Sequelize } = require('sequelize');
const User = require('../../src/models/User');
const Recipient = require('../../src/models/Recipient');
const dbConfig = require('../config/database');

this.connection = new Sequelize(dbConfig);

User.init(this.connection);
Recipient.init(this.connection);