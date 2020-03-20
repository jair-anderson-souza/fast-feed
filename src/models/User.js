const { Model, DataTypes } = require('sequelize');


class User extends Model {

  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.VIRTUAL
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      sequelize
    })
  }

}

module.exports = new User();