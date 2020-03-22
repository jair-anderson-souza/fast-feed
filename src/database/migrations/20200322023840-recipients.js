module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recipients',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addressDetails: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }),

  down: (queryInterface, Sequelize) => {

  }
};
