const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [
    {
      name: "Distribuidora FastFeet",
      email: "admin@fastfeet.com",
      password_hash: bcrypt.hashSync("123456", 8),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
