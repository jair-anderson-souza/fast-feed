const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class UserController {

  async findAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

}

module.exports = new UserController();