const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {

  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'users'
    })
  }

  async checkPassword(password) {
    return await bcrypt.compare(password, this.password_hash);
  }

}

module.exports = User;