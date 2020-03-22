const { Model, Sequelize } = require('sequelize');

class Recipient extends Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.STRING,
      addressDetails: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      postalCode: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'recipients'
    }
    )
  }
}

module.exports = Recipient;